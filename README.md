# 📚 Mini Library Management System

<div align="center">

![JavaScript](https://img.shields.io/badge/JavaScript-ES2020+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Modules](https://img.shields.io/badge/JS_Modules-Native_ESM-4B9CD3?style=for-the-badge&logo=javascript&logoColor=white)
![Status](https://img.shields.io/badge/Status-Final_Exam_Project-brightgreen?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)

<br/>

> A browser-based Library Management System built entirely with **native JavaScript ES Modules (ESM)** — demonstrating module encapsulation, named/default exports, module aggregation, and dynamic imports.

</div>

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Module Architecture](#-module-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the App](#running-the-app)
- [Module Reference](#-module-reference)
- [JavaScript Module Concepts Covered](#-javascript-module-concepts-covered)
- [Simulation Scenario](#-simulation-scenario)
- [Browser Console Output](#-browser-console-output)
- [Key Constraints](#-key-constraints)
- [Tech Stack](#-tech-stack)
- [Author](#-author)

---

## 🔍 Overview

The **Mini Library Management System** is a frontend JavaScript project that simulates core library operations — borrowing and returning books, tracking members, and managing application configuration — all powered by **native ES Module syntax** with zero dependencies and zero build tools.

This project was built as a **final exam submission** for the *JavaScript Modules* course by Eko Kurniawan Khannedy (ProgrammerZamanNow). Its primary goal is to demonstrate a thorough understanding of the JavaScript Module system in a real-world-inspired scenario.

---

## ✨ Features

- 📖 **Book Management** — create books, track availability, borrow and return
- 👤 **Member Management** — register members, manage borrow history, list active loans
- 🔀 **Module Aggregation** — single import entry point via `library.js`
- 🪵 **Leveled Logger** — timestamped `[INFO]`, `[WARN]`, `[ERROR]` console logger
- ⚙️ **App Configuration** — centralized config with named and default exports
- 🛠️ **Utility Functions** — date formatting, ID generation, string capitalization
- ⚡ **Dynamic Module Loading** — on-demand module import triggered by user interaction

---

## 🗂️ Project Structure

```
mini-library/
│
├── index.html              # Entry HTML — loads main.js as type="module"
│
└── scripts/
    ├── book.js             # Book class + LIBRARY_NAME (Named Exports)
    ├── member.js           # Member class (Named Export)
    ├── utils.js            # Utility functions (Export Block Syntax)
    ├── config.js           # App config (Default Export + Named Exports)
    ├── library.js          # Aggregator — re-exports from all modules
    ├── logger.js           # Leveled logger (Default Export)
    └── main.js             # Entry point — all import styles demonstrated
```

---

## 🏗️ Module Architecture

```
                        ┌─────────────┐
                        │  index.html │
                        └──────┬──────┘
                               │ <script type="module">
                               ▼
                        ┌─────────────┐
                        │   main.js   │ ◄── Entry Point
                        └──────┬──────┘
               ┌───────────────┼────────────────────┐
               │               │                    │
               ▼               ▼                    ▼
       ┌──────────────┐  ┌──────────┐       ┌────────────┐
       │  library.js  │  │ config.js│       │  logger.js │
       │ (Aggregator) │  │(default) │       │ (default)  │
       └──────┬───────┘  └──────────┘       └────────────┘
     ┌────────┼────────┬──────────┐
     ▼        ▼        ▼          ▼
 ┌────────┐ ┌───────┐ ┌────────┐ ┌──────────┐
 │ book.js│ │member │ │utils.js│ │ config.js│
 │        │ │  .js  │ │        │ │ (named)  │
 └────────┘ └───────┘ └────────┘ └──────────┘
```

> `library.js` acts as a **barrel file** — a single aggregation point that consumers import from, instead of reaching into individual module files.

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Details |
|-------------|---------|
| Modern Browser | Chrome 80+, Firefox 75+, Edge 80+, Safari 13.1+ |
| Local Web Server | Required — ESM does not work over `file://` protocol |
| Code Editor | VS Code recommended |

> ⚠️ **Important:** This project **will not work** if you open `index.html` directly by double-clicking it. A local server is mandatory due to CORS restrictions on the ES Module spec.

### Installation

**Option A — VS Code Live Server (Recommended)**

1. Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code.
2. Clone or download the repository:
   ```bash
   git clone https://github.com/your-username/mini-library.git
   cd mini-library
   ```
3. Open the project folder in VS Code.

**Option B — Node.js HTTP Server**

```bash
# Install serve globally (one-time)
npm install -g serve

# Navigate to project root
cd mini-library

# Start server
serve .
```

**Option C — Python HTTP Server**

```bash
cd mini-library

# Python 3
python -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080
```

### Running the App

1. Start your local server using one of the methods above.
2. Open your browser and navigate to:
   ```
   http://localhost:5500        # Live Server default
   http://localhost:8080        # Node.js / Python
   ```
3. Open **DevTools** → **Console** tab (`F12` or `Cmd+Option+I`).
4. The simulation scenario runs automatically on page load.
5. Click the **"Load Report"** button to trigger the dynamic module import.

---

## 📦 Module Reference

### `book.js`

| Export | Type | Description |
|--------|------|-------------|
| `LIBRARY_NAME` | `const` (named) | Library display name |
| `Book` | `class` (named) | Represents a book with borrow/return logic |

**`Book` API:**

```js
import { Book } from "./scripts/book.js";

const book = new Book("Clean Code", "Robert C. Martin", 2008);
book.getInfo();       // [Book] Clean Code by Robert C. Martin (2008)
book.borrow();        // "Clean Code" has been borrowed.
book.returnBook();    // "Clean Code" has been returned.
```

---

### `member.js`

| Export | Type | Description |
|--------|------|-------------|
| `Member` | `class` (named) | Represents a library member |

**`Member` API:**

```js
import { Member } from "./scripts/member.js";

const member = new Member("Budi Santoso", "M-001");
member.borrowBook(book);        // Budi Santoso borrowed "Clean Code"
member.returnBook(book);        // Budi Santoso returned "Clean Code"
member.listBorrowedBooks();     // Lists all currently borrowed books
```

---

### `utils.js`

| Export | Type | Description |
|--------|------|-------------|
| `appVersion` | `const` (named) | Application version string |
| `formatDate(date)` | `function` (named) | Formats a `Date` object to `DD/MM/YYYY` |
| `generateId()` | `function` (named) | Returns a random alphanumeric ID |
| `capitalize(str)` | `function` (named) | Capitalizes the first letter of a string |

> All four are exported using a single `export { }` block — no inline `export` keywords.

---

### `config.js`

| Export | Type | Description |
|--------|------|-------------|
| `MAX_BORROW_LIMIT` | `const` (named) | Maximum books a member can borrow |
| `APP_ENV` | `const` (named) | Current environment (`"development"`) |
| *(default)* | `object` (default) | App-wide configuration object |

```js
// Default import
import appConfig from "./scripts/config.js";
console.log(appConfig.appName);  // "Mini Library System"

// Named imports
import { MAX_BORROW_LIMIT, APP_ENV } from "./scripts/config.js";
```

---

### `library.js`

The **barrel/aggregator module**. Re-exports everything from all domain modules so consumers only need a single import statement.

```js
// One import to rule them all
import { Book, Member, LIBRARY_NAME, appVersion, formatDate, generateId, capitalize, MAX_BORROW_LIMIT, APP_ENV } from "./scripts/library.js";
```

> ⚠️ The `default` export from `config.js` is intentionally **not** re-exported here — it must be imported directly to demonstrate understanding of default imports.

---

### `logger.js`

| Export | Type | Description |
|--------|------|-------------|
| *(default)* | `function` (default) | Leveled, timestamped console logger |

```js
import log from "./scripts/logger.js";

log("info",  "Application started");
log("warn",  "Max borrow limit approaching");
log("error", "Book not found");

// Output:
// [INFO]  10:45:22 — Application started
// [WARN]  10:45:23 — Max borrow limit approaching
// [ERROR] 10:45:24 — Book not found
```

---

## 🧩 JavaScript Module Concepts Covered

| Concept | File | Syntax Used |
|---------|------|-------------|
| Named export (inline) | `book.js`, `member.js` | `export class` / `export const` |
| Named export (block) | `utils.js` | `export { a, b, c }` |
| Default export (object) | `config.js` | `export default { }` |
| Default export (function) | `logger.js` | `export default function` |
| Combined default + named | `config.js` | Both in one file |
| Module aggregation | `library.js` | `export { x } from "./module.js"` |
| Named import | `main.js` | `import { x } from "..."` |
| Default import | `main.js` | `import x from "..."` |
| Alias on import | `main.js` | `import { x as y } from "..."` |
| Module object import | `main.js` | `import * as Mod from "..."` |
| Dynamic import | `main.js` | `import("...").then(mod => ...)` |
| Module scope isolation | All files | Variables not accessible cross-file without export |
| `type="module"` in HTML | `index.html` | `<script type="module" src="...">` |

---

## 🎬 Simulation Scenario

The following scenario runs automatically when the page loads via `main.js`:

```
 1. [INFO]  Application started
 2. App: Mini Library System v1.0.0
 3. Library: Perpustakaan Maju Jaya
 4. Books created: Clean Code, The Pragmatic Programmer, You Don't Know JS
 5. Members created: Budi Santoso (M-001), Siti Rahayu (M-002)
 6. Budi borrows "Clean Code" and "The Pragmatic Programmer"
 7. Siti borrows "You Don't Know JS"
 8. [WARN]  Budi tries to borrow "You Don't Know JS" — Book not available.
 9. Budi returns "Clean Code"
10. Budi's current borrowed list: ["The Pragmatic Programmer"]
11. Today's date: 23/03/2026
12. Capitalize result: "Javascript modules"
13. Generated ID: a3f9kz
14. Max Borrow Limit: 3 | Environment: development
```

**Dynamic (on button click):**
```
 → Load Report button clicked
 → [Dynamic] Book module loaded on demand
 → [Book] Design Patterns by Gang of Four (1994)
```

---

## 🖥️ Browser Console Output

All output is visible in the browser's **DevTools Console** (`F12`). No DOM manipulation is performed — this project is intentionally console-driven to focus purely on module architecture.

---

## 🔒 Key Constraints

- **No build tools** — no Webpack, Vite, Rollup, or Babel. Pure native ESM.
- **No npm dependencies** — zero `node_modules`.
- **No global variables** — all data is shared exclusively through `import`/`export`.
- **Must run on a local server** — `file://` protocol is not supported for ESM.
- **One `export default` per file** — enforced by the JavaScript specification.

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| HTML5 | Page shell, script loading |
| JavaScript (ES2020+) | All application logic |
| Native ES Modules | Module system — no bundler |
| Browser DevTools | Output / debugging |

---

## 👤 Author

**Course:** JavaScript Modules  
**Instructor:** Eko Kurniawan Khannedy  
**Channel:** [ProgrammerZamanNow](https://youtube.com/c/ProgrammerZamanNow)  
**Website:** [programmerzamannow.com](https://www.programmerzamannow.com)

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

Made with ☕ and `import` / `export`

*"Write modules like you mean it."*

</div>
