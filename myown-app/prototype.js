const STORE_KEY = "weekly-founder-prototype";

const copy = {
  kicker: "\u624b\u673a App \u539f\u578b",
  title: "\u6bcf\u5468\u521b\u4e1a\u8d22\u52a1\u7ba1\u7406 App",
  back: "\u56de\u5230\u7f51\u9875\u7248",
  structure: "\u4fe1\u606f\u67b6\u6784",
  notesTitle: "\u5de6\u4fa7\u5468\u6570\u5bfc\u822a",
  noteOne: "\u6bcf\u5468\u4e00\u81ea\u52a8\u4ea7\u751f\u6700\u65b0\u5468\u6570\u3002",
  noteTwo: "\u70b9\u51fb\u5468\u6570\u540e\uff0c\u53f3\u4fa7\u663e\u793a\u6700\u65b0\u4e00\u5468\u548c\u4eca\u5929\u72b6\u6001\u3002",
  noteThree: "\u8d22\u52a1\u7ba1\u7406\u770b\u8be6\u60c5\uff0c\u521b\u4e1a\u7ba1\u7406\u5199\u6bcf\u5929\u8fdb\u5ea6\u548c todo\u3002",
  todayShort: "\u4eca\u65e5",
  briefTitle: "\u8d22\u7ecf\u65b0\u95fb Top 10",
  newsA: "AI \u786c\u4ef6\u7ee7\u7eed\u4e3b\u5bfc\u5e02\u573a\u60c5\u7eea\u3002",
  newsB: "\u6cb9\u4ef7\u548c\u4e2d\u4e1c\u98ce\u9669\u4ecd\u4f1a\u5f71\u54cd\u901a\u80c0\u3002",
  newsC: "\u5229\u7387\u4ecd\u662f\u4f30\u503c\u538b\u529b\u7684\u5173\u952e\u53d8\u91cf\u3002",
  finance: "\u8d22\u52a1\u7ba1\u7406",
  financeSub: "\u672c\u5468\u7ed3\u4f59",
  startup: "\u521b\u4e1a\u7ba1\u7406",
  startupSub: "\u672c\u5468\u52a8\u4f5c\u5b8c\u6210",
  backMini: "\u8fd4\u56de",
  financeTitle: "\u8d22\u52a1\u8be6\u60c5",
  balance: "\u672c\u5468\u7ed3\u4f59",
  income: "\u6536\u5165 CNY 12,000",
  expense: "\u652f\u51fa CNY 3,580",
  client: "\u5ba2\u6237\u56de\u6b3e",
  tools: "\u5de5\u5177\u8ba2\u9605",
  food: "\u9910\u996e",
  startupTitle: "\u6bcf\u65e5\u8fdb\u5ea6",
  progress: "\u8fdb\u5ea6\u548c Todo",
  saved: "\u5df2\u672c\u5730\u4fdd\u5b58",
};

const today = new Date();
const store = loadStore();
let selectedWeek = getIsoWeek(today);

document.querySelectorAll("[data-text]").forEach((node) => {
  node.textContent = copy[node.dataset.text] || node.textContent;
});

document.querySelector("#statusTime").textContent = new Intl.DateTimeFormat("zh-CN", {
  hour: "2-digit",
  minute: "2-digit",
}).format(today);
document.querySelector("#monthBrand").textContent = new Intl.DateTimeFormat("zh-CN", {
  month: "short",
}).format(today);

renderWeeks();
selectWeek(selectedWeek.weekKey, "overview");

document.querySelectorAll("[data-view]").forEach((node) => {
  node.addEventListener("click", () => showView(node.dataset.view));
});

document.querySelector("#startupNotes").addEventListener("input", (event) => {
  store.notes[selectedWeek.weekKey] = event.target.value;
  saveStore();
  setSaveState("\u6b63\u5728\u4fdd\u5b58...");
});

function renderWeeks() {
  const list = document.querySelector("#weekList");
  list.innerHTML = "";

  getRecentWeeks(today, 6).forEach((week) => {
    const group = document.createElement("div");
    group.className = "week-group";
    group.dataset.week = week.weekKey;
    group.innerHTML = `
      <button class="week-button" type="button">${week.shortLabel}</button>
      <div class="sub-tabs">
        <button class="sub-tab" type="button" data-sub-view="finance">\u8d22\u52a1</button>
        <button class="sub-tab" type="button" data-sub-view="startup">\u521b\u4e1a</button>
      </div>
    `;

    group.querySelector(".week-button").addEventListener("click", () => {
      selectWeek(week.weekKey, "overview");
    });

    group.querySelectorAll(".sub-tab").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.stopPropagation();
        selectWeek(week.weekKey, button.dataset.subView);
      });
    });

    list.appendChild(group);
  });
}

function selectWeek(weekKey, view) {
  const week = parseWeekKey(weekKey);
  selectedWeek = week;
  document.querySelectorAll(".week-group").forEach((group) => {
    const active = group.dataset.week === weekKey;
    group.classList.toggle("active", active);
    group.querySelectorAll(".sub-tab").forEach((button) => {
      button.classList.toggle("active", active && button.dataset.subView === view);
    });
  });

  document.querySelector("#selectedWeekMeta").textContent = `${week.year} / ${formatDateLabel(today)}`;
  document.querySelector("#selectedWeekTitle").textContent = `${week.shortLabel} \u73b0\u72b6`;
  document.querySelector("#startupNotes").value = store.notes[weekKey] || "";
  showView(view);
}

function showView(view) {
  const normalized = view === "finance" || view === "startup" ? view : "overview";
  document.querySelectorAll(".view").forEach((panel) => {
    panel.classList.toggle("active", panel.id === `${normalized}View`);
  });

  document.querySelectorAll(".sub-tab").forEach((button) => {
    button.classList.toggle(
      "active",
      button.closest(".week-group")?.dataset.week === selectedWeek.weekKey &&
        button.dataset.subView === normalized,
    );
  });
}

function getRecentWeeks(baseDate, count) {
  const weeks = [];
  const monday = startOfIsoWeek(baseDate);
  for (let index = 0; index < count; index += 1) {
    const date = new Date(monday);
    date.setDate(monday.getDate() - index * 7);
    weeks.push(getIsoWeek(date));
  }
  return weeks;
}

function startOfIsoWeek(date) {
  const copyDate = new Date(date);
  const day = copyDate.getDay() || 7;
  copyDate.setHours(0, 0, 0, 0);
  copyDate.setDate(copyDate.getDate() - day + 1);
  return copyDate;
}

function getIsoWeek(date) {
  const temp = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = temp.getUTCDay() || 7;
  temp.setUTCDate(temp.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(temp.getUTCFullYear(), 0, 1));
  const weekNumber = Math.ceil(((temp - yearStart) / 86400000 + 1) / 7);
  const year = temp.getUTCFullYear();
  const weekKey = `${year}-W${String(weekNumber).padStart(2, "0")}`;
  return {
    year,
    weekNumber,
    weekKey,
    shortLabel: `W${String(weekNumber).padStart(2, "0")}`,
  };
}

function parseWeekKey(weekKey) {
  const [year, week] = weekKey.split("-W");
  return {
    year,
    weekNumber: Number(week),
    weekKey,
    shortLabel: `W${week}`,
  };
}

function loadStore() {
  try {
    return JSON.parse(localStorage.getItem(STORE_KEY) || '{"notes":{}}');
  } catch {
    return { notes: {} };
  }
}

function formatDateLabel(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function saveStore() {
  localStorage.setItem(STORE_KEY, JSON.stringify(store));
}

function setSaveState(text) {
  const label = document.querySelector("#saveState");
  label.textContent = text;
  window.clearTimeout(setSaveState.timer);
  setSaveState.timer = window.setTimeout(() => {
    label.textContent = copy.saved;
  }, 900);
}
