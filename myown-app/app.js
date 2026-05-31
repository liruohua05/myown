const STORAGE_KEY = "my-founder-life-money-app";

const zh = {
  brandTitle: "\u6211\u7684\u7ba1\u7406\u53f0",
  brandSub: "\u521b\u4e1a / \u751f\u6d3b / \u91d1\u94b1",
  tabStartup: "\u521b\u4e1a",
  tabLife: "\u751f\u6d3b",
  tabMoney: "\u91d1\u94b1\u7ba1\u7406",
  today: "\u4eca\u5929",
  startupGain: "\u4eca\u5929\u7684\u521b\u4e1a\u6536\u83b7",
  learnedLabel: "\u6211\u4eca\u5929\u5b66\u5230\u4e86\u4ec0\u4e48",
  progressLabel: "\u4eca\u5929\u63a8\u8fdb\u4e86\u4ec0\u4e48",
  nextLabel: "\u660e\u5929\u6700\u91cd\u8981\u7684\u4e00\u4ef6\u4e8b",
  startupMetrics: "\u521b\u4e1a\u4eea\u8868\u76d8",
  leads: "\u6f5c\u5728\u5ba2\u6237",
  experiments: "\u672c\u5468\u5b9e\u9a8c",
  conversations: "\u6709\u6548\u5bf9\u8bdd",
  lifeTitle: "\u751f\u6d3b\u6a21\u5757",
  lifeEmpty: "\u8fd9\u91cc\u5148\u4fdd\u6301\u7a7a\u767d\uff0c\u7b49\u4f60\u60f3\u8bb0\u5f55\u4e60\u60ef\u3001\u5fc3\u60c5\u3001\u8fd0\u52a8\u3001\u9605\u8bfb\u6216\u5bb6\u5ead\u4e8b\u9879\u65f6\u518d\u6269\u5c55\u3002",
  cashflow: "\u73b0\u91d1\u6d41\u901f\u8bb0",
  addTransaction: "+ \u6dfb\u52a0",
  income: "\u672c\u6708\u6536\u5165",
  expense: "\u672c\u6708\u652f\u51fa",
  balance: "\u7ed3\u4f59",
  incomeOption: "\u6536\u5165",
  expenseOption: "\u652f\u51fa",
  newsTitle: "\u8d22\u7ecf\u65b0\u95fb Top 10",
  newsOne: "\u6bcf\u65e5\u65e9\u4e0a 10 \u70b9\u7684\u65b0\u95fb\u6458\u8981\u4f1a\u7531\u5b9a\u65f6\u4efb\u52a1\u751f\u6210\u3002",
  newsTwo: "\u4f18\u5148\u5173\u6ce8\u8def\u900f\u793e\u4e0e\u4e3b\u6d41\u8d22\u7ecf\u5a92\u4f53\u3002",
  newsThree: "\u6458\u8981\u5efa\u8bae\u8986\u76d6\u5e02\u573a\u3001\u5229\u7387\u3001\u79d1\u6280\u3001\u80fd\u6e90\u3001\u521b\u4e1a\u878d\u8d44\u548c\u5b8f\u89c2\u98ce\u9669\u3002",
  newsNotesLabel: "\u4eca\u65e5\u6458\u8981\u7c98\u8d34\u533a",
};

const placeholders = {
  learningInput: "\u5199\u4e0b\u4eca\u5929\u5bf9\u4ea7\u54c1\u3001\u7528\u6237\u3001\u9500\u552e\u3001\u5e02\u573a\u6216\u81ea\u5df1\u7684\u4e00\u4e2a\u65b0\u8ba4\u8bc6\u3002",
  progressInput: "\u8bb0\u5f55\u4e00\u4e2a\u5177\u4f53\u52a8\u4f5c\uff1a\u53d1\u4e86\u51e0\u6761\u6d88\u606f\u3001\u9a8c\u8bc1\u4e86\u54ea\u4e2a\u60f3\u6cd5\u3001\u505a\u4e86\u54ea\u4e2a\u9875\u9762\u3002",
  nextInput: "\u53ea\u5199\u4e00\u4ef6\u4e8b\uff0c\u8ba9\u660e\u5929\u9192\u6765\u5c31\u77e5\u9053\u5148\u505a\u4ec0\u4e48\u3002",
  transactionAmount: "\u91d1\u989d",
  transactionNote: "\u5907\u6ce8",
  newsNotes: "\u5b9a\u65f6\u4efb\u52a1\u751f\u6210\u540e\uff0c\u53ef\u4ee5\u628a Top 10 \u6458\u8981\u653e\u5728\u8fd9\u91cc\uff0c\u7f51\u9875\u4f1a\u81ea\u52a8\u4fdd\u5b58\u3002",
};

const generatedBriefing = `2026-05-31 财经新闻 Top 10

1. 美股继续创纪录，高位风险偏好升温
Reuters 报道称，美股主要指数在 5 月 29 日继续刷新高位，并录得周度和月度上涨。AI 热情、企业盈利和中东局势缓和预期共同支撑市场。对金钱管理来说，高风险资产情绪很强，但追高前要留意估值和回撤。
来源：https://ca.marketscreener.com/news/wall-st-extends-rally-on-tech-strength-mideast-deal-stays-in-focus-ce7f5ddbde8ef720

2. Dell 因 AI 服务器需求大涨，带动科技股
Dell 上调全年收入和利润预期，股价大涨，市场把它视为 AI 数据中心建设的直接受益者。AI 硬件需求仍是当前资本市场主线。对创业判断来说，围绕算力、服务器、数据中心运维和企业 AI 落地的机会仍在扩大。
来源：https://www.itpro.com/business/business-strategy/dell-raises-annual-forecasts-as-ai-boom-continues-to-reward-hardware-vendors

3. 市场关注美国与伊朗潜在协议
Reuters 相关报道提到，投资者继续关注美国与伊朗协议及霍尔木兹海峡运输限制变化。若局势缓和，油价和通胀压力可能下降；若反复，能源、物流和通胀预期会重新扰动市场。金钱管理上要关注能源价格对消费和资产配置的传导。
来源：https://www.brecorder.com/news/amp/40423153

4. 通胀与 GDP 数据让利率预期更复杂
Reuters 报道提到，美国 4 月通胀加快，同时一季度 GDP 被下修至 1.6% 年化增长。市场一边押注 AI 增长，一边担心通胀粘性和增长放缓。现金、债券和股票仓位需要避免只押一个方向。
来源：https://ca.marketscreener.com/news/wall-st-futures-steady-as-investors-await-mideast-deal-updates-dell-soars-ce7f5ddbdb8ef420

5. 市场开始讨论美联储今年加息可能
Reuters 转述的市场定价显示，资金市场预计美联储今年大体维持利率不变，但也出现 12 月加息 25 个基点的预期。高利率环境会压制估值，也会提高现金和短债吸引力。创业融资上，资本成本仍不可忽视。
来源：https://www.newstribune.com/news/2026/may/30/wall-street-hits-record-closing-highs/

6. Micron 首次进入万亿美元市值俱乐部
Reuters 报道，Micron 因 AI 记忆体需求首次触及 1 万亿美元市值。高带宽内存成为 AI 基础设施瓶颈之一，投资者正在寻找 Nvidia 之外的 AI 供应链受益者。创业方向上，AI 的上游硬件、存储、散热、电力和供应链服务值得观察。
来源：https://www.investing.com/news/stock-market-news/micron-joins-1-trillion-club-as-ai-race-powers-memory-chip-boom-4710313

7. AI 交易从 GPU 扩散到内存和服务器
Reuters 关于 Micron 与 Dell 的报道共同说明，AI 投资主题正在从单一芯片公司扩散到更广的基础设施链条。市场可能继续奖励“卖铲子”的公司。个人投资需要区分真实现金流增长和情绪驱动估值扩张。
来源：https://ca.investing.com/news/stock-market-news/sp-500-hits-record-closing-high-on-ai-optimism-micron-joins-1-trillion-club-4660247

8. Lambda 获 Hudson River Trading 云算力合同
Reuters 报道，AI 云公司 Lambda 获得高频交易公司 Hudson River Trading 合同，提供超过 1000 套 Nvidia Blackwell 系统访问。金融机构对 AI 算力的需求正在上升。创业上，垂直行业 AI 算力服务可能比通用工具更容易商业化。
来源：https://www.investing.com/news/stock-market-news/lambda-wins-cloud-deal-with-hudson-river-trading-to-supply-access-to-nvidia-chips-4701550

9. AI 乐观与中东风险形成拉扯
Reuters 市场报道显示，投资者一边因 AI 和盈利上修买入，一边仍担心伊朗战争对通胀和全球经济的影响。当前市场不是单纯牛市，而是高热度主题叠加宏观不确定性。记账和投资上，保留流动性比满仓更稳。
来源：https://www.marketscreener.com/news/wall-street-extends-rally-on-tech-strength-middle-east-deal-stays-in-focus-ce7f5ddbd18af02d

10. 并购消息显示企业重组仍活跃
Reuters 市场报道提到 International Flavors & Fragrances 因可能向 CVC 出售食品配料业务而上涨。高利率环境下，企业仍通过出售非核心资产、私募股权交易和业务重组释放价值。创业和投资上，可以关注“现金流好、业务可拆分”的公司与赛道。
来源：https://www.marketscreener.com/news/wall-st-futures-steady-as-investors-await-mideast-deal-updates-dell-soars-ce7f5ddbdb8ef420

今日需要关注：
- AI 硬件链条仍是市场主线，但估值升温很快。
- 中东局势和油价仍可能影响通胀预期。
- 美联储路径不再只是降息叙事，高利率风险要继续考虑。
- 创业方向可重点观察 AI 基础设施、行业算力、企业 AI 落地服务。
- 个人金钱管理建议保留现金缓冲，不因市场新高而过度追涨。`;

const state = loadState();
const titles = {
  startup: "\u521b\u4e1a\u590d\u76d8",
  life: "\u751f\u6d3b\u6a21\u5757",
  money: "\u91d1\u94b1\u7ba1\u7406",
};

const formatCurrency = (value) =>
  new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    maximumFractionDigits: 0,
  }).format(value || 0);

function loadState() {
  const fallback = {
    startup: {
      learning: "",
      progress: "",
      next: "",
      leads: 0,
      experiments: 0,
      conversations: 0,
    },
    money: {
      transactions: [],
      newsNotes: "",
    },
  };

  try {
    return { ...fallback, ...JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}") };
  } catch {
    return fallback;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function applyText() {
  document.title = "\u6211\u7684\u521b\u4e1a\u751f\u6d3b\u8d26\u672c";
  document.querySelector("#pageTitle").textContent = titles.startup;
  document.querySelector("#clearStartup").title = "\u6e05\u7a7a\u4eca\u65e5\u5185\u5bb9";
  document.querySelector("#clearStartup").setAttribute("aria-label", "\u6e05\u7a7a\u4eca\u65e5\u5185\u5bb9");
  document.querySelector("#startupSaveState").textContent = "\u5df2\u81ea\u52a8\u4fdd\u5b58";

  Object.entries(zh).forEach(([key, value]) => {
    document.querySelectorAll(`[data-i18n="${key}"]`).forEach((node) => {
      node.textContent = value;
    });
  });

  Object.entries(placeholders).forEach(([id, value]) => {
    document.querySelector(`#${id}`).placeholder = value;
  });
}

function setSaveState(text) {
  const label = document.querySelector("#startupSaveState");
  label.textContent = text;
  window.clearTimeout(setSaveState.timer);
  setSaveState.timer = window.setTimeout(() => {
    label.textContent = "\u5df2\u81ea\u52a8\u4fdd\u5b58";
  }, 1000);
}

function bindTabs() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.tab;

      document.querySelectorAll(".tab-button").forEach((tab) => {
        const isActive = tab.dataset.tab === selected;
        tab.classList.toggle("active", isActive);
        tab.setAttribute("aria-selected", String(isActive));
      });

      document.querySelectorAll(".tab-panel").forEach((panel) => {
        panel.classList.toggle("active", panel.id === selected);
      });

      document.querySelector("#pageTitle").textContent = titles[selected];
    });
  });
}

function bindStartup() {
  const fields = [
    ["learningInput", "learning"],
    ["progressInput", "progress"],
    ["nextInput", "next"],
    ["leadCount", "leads"],
    ["experimentCount", "experiments"],
    ["conversationCount", "conversations"],
  ];

  fields.forEach(([id, key]) => {
    const input = document.querySelector(`#${id}`);
    input.value = state.startup[key] || "";
    input.addEventListener("input", () => {
      const isNumber = input.type === "number";
      state.startup[key] = isNumber ? Number(input.value || 0) : input.value;
      saveState();
      setSaveState("\u6b63\u5728\u4fdd\u5b58...");
    });
  });

  document.querySelector("#clearStartup").addEventListener("click", () => {
    ["learningInput", "progressInput", "nextInput"].forEach((id) => {
      document.querySelector(`#${id}`).value = "";
    });
    state.startup.learning = "";
    state.startup.progress = "";
    state.startup.next = "";
    saveState();
    setSaveState("\u5df2\u6e05\u7a7a");
  });
}

function bindMoney() {
  document.querySelector("#newsNotes").value = state.money.newsNotes || generatedBriefing;
  document.querySelector("#newsNotes").addEventListener("input", (event) => {
    state.money.newsNotes = event.target.value;
    saveState();
  });

  document.querySelector("#addTransaction").addEventListener("click", addTransaction);
  document.querySelector("#transactionForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addTransaction();
  });

  renderTransactions();
}

function addTransaction() {
  const type = document.querySelector("#transactionType").value;
  const amountInput = document.querySelector("#transactionAmount");
  const noteInput = document.querySelector("#transactionNote");
  const amount = Number(amountInput.value || 0);

  if (!amount) return;

  state.money.transactions.unshift({
    id: crypto.randomUUID(),
    type,
    amount,
    note: noteInput.value.trim() || (type === "income" ? "\u6536\u5165" : "\u652f\u51fa"),
    date: new Date().toISOString(),
  });

  amountInput.value = "";
  noteInput.value = "";
  saveState();
  renderTransactions();
}

function renderTransactions() {
  const list = document.querySelector("#transactionList");
  const transactions = state.money.transactions || [];
  const income = transactions
    .filter((item) => item.type === "income")
    .reduce((sum, item) => sum + item.amount, 0);
  const expense = transactions
    .filter((item) => item.type === "expense")
    .reduce((sum, item) => sum + item.amount, 0);

  document.querySelector("#incomeTotal").textContent = formatCurrency(income);
  document.querySelector("#expenseTotal").textContent = formatCurrency(expense);
  document.querySelector("#balanceTotal").textContent = formatCurrency(income - expense);

  list.innerHTML = "";
  if (!transactions.length) {
    list.innerHTML = '<p class="save-state">\u8fd8\u6ca1\u6709\u8bb0\u5f55\uff0c\u6dfb\u52a0\u7b2c\u4e00\u7b14\u73b0\u91d1\u6d41\u3002</p>';
    return;
  }

  transactions.slice(0, 8).forEach((item) => {
    const row = document.createElement("div");
    const date = new Intl.DateTimeFormat("zh-CN", {
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(item.date));
    const className = item.type === "income" ? "amount-income" : "amount-expense";
    const sign = item.type === "income" ? "+" : "-";

    row.className = "transaction-item";
    row.innerHTML = `
      <div>
        <strong>${escapeHtml(item.note)}</strong>
        <small>${date}</small>
      </div>
      <strong class="${className}">${sign}${formatCurrency(item.amount)}</strong>
    `;
    list.appendChild(row);
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => {
    const entities = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" };
    return entities[char];
  });
}

function setToday() {
  document.querySelector("#todayLabel").textContent = new Intl.DateTimeFormat("zh-CN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date());
}

applyText();
setToday();
bindTabs();
bindStartup();
bindMoney();
