# Figma App Prototype Brief

Project name: My Founder Life Money App

Goal:
Design a mobile app prototype for a personal operating system with three core modules:
Startup, Life, and Money Management.

Primary user:
An individual founder who wants one place to record daily startup learning, manage personal cashflow, and read a daily financial news briefing.

Design direction:
Quiet, focused, premium productivity app. It should feel like a serious personal dashboard, not a marketing page. Use restrained colors, dense but readable cards, and fast mobile workflows.

Core navigation:
Use bottom navigation with three primary tabs:
1. Home
2. Startup
3. Money

Life can appear as a module card on Home and a placeholder screen, but it does not need full functionality yet.

Suggested mobile frame size:
390 x 844, iPhone-style frame.

Color tokens:
- Background: #EEF1ED
- Surface: #FBFCF8
- Text: #202421
- Muted text: #667069
- Border: #D4DDD5
- Startup green: #22715D
- Startup green soft: #DFEEE8
- Money blue: #2C5D8F
- Money blue soft: #E2EBF5
- Life gold: #A96F18
- Life gold soft: #F3EADB
- Expense red: #A94B5B

Typography:
- Use a clean system sans font.
- Screen titles: 28-32 px, semibold/bold.
- Card titles: 16-20 px, semibold.
- Body and labels: 13-15 px.
- Do not use oversized hero typography.

Frames to create:

1. Home Dashboard
- Header: "Today" and "My Dashboard".
- Three module tiles:
  - Startup: "Daily review"
  - Money: "Cashflow"
  - Life: "Coming later"
- A 10:00 Briefing card:
  - Title: "Financial News Top 10"
  - CTA: "Read"
- Bottom tabs: Home, Startup, Money.

2. Startup Daily Review
- Header: "Startup" and "Daily Review".
- Text area card: "Today's gain".
- Text area card: "Progress".
- Input card: "Tomorrow's one thing".
- Three compact metrics:
  - Leads
  - Tests
  - Talks
- Bottom tabs with Startup active.

3. Money Cashflow
- Header: "Money" and "Cashflow".
- Large balance card:
  - "This month's balance"
  - "CNY 8,420"
  - Income CNY 12,000
  - Expense CNY 3,580
- Two quick buttons:
  - Record income
  - Record expense
- Recent transaction list:
  - Client payment +2,000
  - SaaS tools -168
  - Food -46
- Add entry affordance should be obvious.
- Bottom tabs with Money active.

4. Financial Briefing
- Header: "Reuters / Markets" and "Today's Top 10".
- Numbered list of top financial news summaries.
- A focus card:
  - Label: "Watch"
  - Text: "Keep cash buffer before chasing market highs."
- This screen is reached from the 10:00 Briefing card on Home and from Money.

5. Life Placeholder
- Centered empty state.
- Title: "Life".
- Copy: "Quiet for now. Add habits, mood, reading, health, or family later."
- Use Life gold soft background accent.

Prototype interactions:
- Home tile "Startup" opens Startup Daily Review.
- Home tile "Money" opens Money Cashflow.
- Home tile "Life" opens Life Placeholder.
- Home briefing card opens Financial Briefing.
- Bottom nav switches between Home, Startup, and Money.

Component list:
- Bottom navigation
- Module tile
- Text input card
- Metric chip/card
- Balance card
- Transaction row
- Briefing list item
- Empty state

Existing local reference:
- Web app: C:\Users\lee\Documents\m\index.html
- Clickable HTML prototype: C:\Users\lee\Documents\m\prototype.html

Figma AI prompt:
Create a polished mobile app prototype for "My Founder Life Money App", a personal operating system for an individual founder. The app has three core modules: Startup, Life, and Money Management. Use a quiet premium productivity style with a light neutral background, green for Startup, blue for Money, and gold for Life. Create five iPhone 390x844 frames: Home Dashboard, Startup Daily Review, Money Cashflow, Financial Briefing, and Life Placeholder. Add bottom navigation for Home, Startup, and Money. Home should show three module tiles and a 10:00 Financial News Top 10 briefing card. Startup should have text areas for today's gain, progress, and tomorrow's one thing, plus three metrics. Money should show this month's balance, income, expense, quick add buttons, and recent transactions. Briefing should show a numbered list of financial news summaries and a focus card. Life should be an empty placeholder. Keep the interface dense, calm, and practical.
