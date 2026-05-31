const STORE_KEY = "my-weekly-founder-app";

const today = new Date();
const state = loadState();
let selectedWeek = getIsoWeek(today);

const news = [
  "AI hardware keeps leading market sentiment.",
  "Oil and Middle East risk still affect inflation.",
  "Rates remain the key pressure on valuation.",
  "Startup opportunities cluster around AI infrastructure.",
  "Keep a cash buffer before chasing market highs.",
];

init();

function init() {
  document.querySelector("#monthBrand").textContent = new Intl.DateTimeFormat("zh-CN", {
    month: "short",
  }).format(today);
  document.querySelector("#todayButton").textContent = "\u4eca\u65e5";
  document.querySelector("#dateLabel").textContent = `${today.getFullYear()} / ${formatDateLabel(today)}`;
  document.querySelector("#newsList").innerHTML = news.map((item) => `<li>${item}</li>`).join("");

  renderWeeks();
  bindEvents();
  selectWeek(selectedWeek.weekKey, "overview");
}

function bindEvents() {
  document.querySelector("#todayButton").addEventListener("click", () => {
    selectWeek(getIsoWeek(new Date()).weekKey, "overview");
  });

  document.querySelectorAll("[data-view]").forEach((node) => {
    node.addEventListener("click", () => showView(node.dataset.view));
  });

  document.querySelector("#financeForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addFinanceEntry();
  });

  document.querySelector("#progressInput").addEventListener("input", (event) => {
    getWeekData().progress = event.target.value;
    saveState();
    setSaveState("\u6b63\u5728\u4fdd\u5b58...");
  });

  document.querySelector("#todoForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addTodo();
  });
}

function renderWeeks() {
  const list = document.querySelector("#weekList");
  list.innerHTML = "";

  getRecentWeeks(today, 8).forEach((week) => {
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
  selectedWeek = parseWeekKey(weekKey);
  document.querySelector("#pageTitle").textContent = `${selectedWeek.shortLabel} \u73b0\u72b6`;
  document.querySelectorAll(".week-group").forEach((group) => {
    const active = group.dataset.week === weekKey;
    group.classList.toggle("active", active);
    group.querySelectorAll(".sub-tab").forEach((button) => {
      button.classList.toggle("active", active && button.dataset.subView === view);
    });
  });
  renderCurrentWeek();
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

function renderCurrentWeek() {
  const data = getWeekData();
  const income = data.finance
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);
  const expense = data.finance
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);
  const balance = income - expense;
  const done = data.todos.filter((todo) => todo.done).length;

  document.querySelector("#overviewBalance").textContent = formatCurrency(balance);
  document.querySelector("#overviewTodo").textContent = `${done} / ${data.todos.length}`;
  document.querySelector("#financeBalance").textContent = formatCurrency(balance);
  document.querySelector("#financeIncome").textContent = `Income ${formatCurrency(income)}`;
  document.querySelector("#financeExpense").textContent = `Expense ${formatCurrency(expense)}`;
  document.querySelector("#progressInput").value = data.progress || "";

  renderTransactions(data.finance);
  renderTodos(data.todos);
}

function addFinanceEntry() {
  const amount = Number(document.querySelector("#entryAmount").value || 0);
  if (!amount) return;

  getWeekData().finance.unshift({
    id: crypto.randomUUID(),
    type: document.querySelector("#entryType").value,
    amount,
    note: document.querySelector("#entryNote").value.trim() || "\u672a\u547d\u540d",
    date: new Date().toISOString(),
  });

  document.querySelector("#entryAmount").value = "";
  document.querySelector("#entryNote").value = "";
  saveState();
  renderCurrentWeek();
}

function renderTransactions(items) {
  const list = document.querySelector("#transactionList");
  list.innerHTML = "";
  if (!items.length) {
    list.innerHTML = '<p class="save-state">\u8fd8\u6ca1\u6709\u8d22\u52a1\u8bb0\u5f55\u3002</p>';
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("div");
    const sign = item.type === "income" ? "+" : "-";
    const className = item.type === "income" ? "amount-income" : "amount-expense";
    row.className = "transaction-item";
    row.innerHTML = `
      <span>${escapeHtml(item.note)}</span>
      <strong class="${className}">${sign}${formatCurrency(item.amount)}</strong>
    `;
    list.appendChild(row);
  });
}

function addTodo() {
  const input = document.querySelector("#todoInput");
  const text = input.value.trim();
  if (!text) return;

  getWeekData().todos.push({
    id: crypto.randomUUID(),
    text,
    done: false,
  });
  input.value = "";
  saveState();
  renderCurrentWeek();
}

function renderTodos(items) {
  const list = document.querySelector("#todoList");
  list.innerHTML = "";
  if (!items.length) {
    list.innerHTML = '<p class="save-state">\u8fd8\u6ca1\u6709 todo\u3002</p>';
    return;
  }

  items.forEach((item) => {
    const row = document.createElement("div");
    row.className = `todo-item${item.done ? " done" : ""}`;
    row.innerHTML = `
      <label>
        <input type="checkbox" ${item.done ? "checked" : ""} />
        <span>${escapeHtml(item.text)}</span>
      </label>
      <button class="delete-button" type="button">x</button>
    `;
    row.querySelector("input").addEventListener("change", (event) => {
      item.done = event.target.checked;
      saveState();
      renderCurrentWeek();
    });
    row.querySelector(".delete-button").addEventListener("click", () => {
      getWeekData().todos = getWeekData().todos.filter((todo) => todo.id !== item.id);
      saveState();
      renderCurrentWeek();
    });
    list.appendChild(row);
  });
}

function getWeekData() {
  if (!state.weeks[selectedWeek.weekKey]) {
    state.weeks[selectedWeek.weekKey] = {
      finance: [],
      progress: "",
      todos: [],
    };
  }
  return state.weeks[selectedWeek.weekKey];
}

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORE_KEY) || "{}");
    return { weeks: {}, ...parsed };
  } catch {
    return { weeks: {} };
  }
}

function saveState() {
  localStorage.setItem(STORE_KEY, JSON.stringify(state));
}

function setSaveState(text) {
  const label = document.querySelector("#saveState");
  label.textContent = text;
  window.clearTimeout(setSaveState.timer);
  setSaveState.timer = window.setTimeout(() => {
    label.textContent = "Saved locally";
  }, 900);
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

function formatDateLabel(date) {
  return new Intl.DateTimeFormat("zh-CN", {
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[char];
  });
}
