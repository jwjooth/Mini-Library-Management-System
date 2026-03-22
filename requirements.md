# 🎓 FINAL EXAM — JavaScript Modules
### Issued by: Senior Lead Developer | Module: JavaScript Modules
### Deadline: Submit before moving to the next module (JavaScript DOM)

---

> **📢 Message from Your Senior Lead Dev:**
>
> *"Hey, before I sign off on your progression to the next module, I need to see that you actually understand how JavaScript Modules work — not just theoretically, but in practice. I'm not going to give you 20 separate quiz questions. That's not how real work is done.*
>
> *Instead, you're going to build a mini product from scratch. Consider this your first real ticket. The requirements are written below like a proper dev task. I expect clean structure, correct use of every module concept we've covered, and working code. No shortcuts. No excuses.*
>
> *— Lead Dev"*

---

## 📋 PROJECT BRIEF

**Project Name:** `Mini Library Management System`

**Context:**
You are a junior developer onboarding at a software company. Your team is building a **Library Management System** for a small local library. The senior lead has broken down the first sprint into one ticket — yours. You must implement the entire module system that powers the app's core features.

The app must run in the **browser** (via a local web server / Live Server), and your code must be **structured using JavaScript Modules** properly.

---

## 🗂️ Required Project Structure

```
mini-library/
├── index.html
└── scripts/
    ├── book.js           (Task 1)
    ├── member.js         (Task 2)
    ├── utils.js          (Task 3)
    ├── config.js         (Task 4)
    ├── library.js        (Task 5 — Aggregating Module)
    ├── logger.js         (Task 6 — Export Default)
    └── main.js           (Task 7 — Entry Point, all imports here)
```

---

## ✅ TASKS & COMPETENCY COVERAGE

---

### TASK 1 — `book.js` | *Named Export: Class & Variable*

**Competency tested:** Export named class, export named variable, module scope isolation

Create a file `scripts/book.js` with:

1. A **constant variable** `LIBRARY_NAME` with the value `"Perpustakaan Maju Jaya"` — export it as a named export.
2. A **class** `Book` with:
   - Constructor accepting `(title, author, year)`
   - Properties: `this.title`, `this.author`, `this.year`, `this.isAvailable = true`
   - Method `getInfo()` → logs to console: `` `[Book] ${this.title} by ${this.author} (${this.year})` ``
   - Method `borrow()` → sets `isAvailable` to `false` and logs: `` `"${this.title}" has been borrowed.` ``
   - Method `returnBook()` → sets `isAvailable` to `true` and logs: `` `"${this.title}" has been returned.` ``
3. Export `Book` as a **named export**.

> 💡 *Senior note: Make sure `LIBRARY_NAME` is NOT accessible from outside unless explicitly imported. That's the whole point of module scope.*

---

### TASK 2 — `member.js` | *Named Export: Class with Multiple Methods*

**Competency tested:** Named export class, encapsulated module scope

Create a file `scripts/member.js` with:

1. A **class** `Member` with:
   - Constructor accepting `(name, memberId)`
   - Properties: `this.name`, `this.memberId`, `this.borrowedBooks = []`
   - Method `borrowBook(book)` → calls `book.borrow()`, pushes the book to `borrowedBooks`, logs: `` `${this.name} borrowed "${book.title}"` ``
   - Method `returnBook(book)` → calls `book.returnBook()`, removes the book from `borrowedBooks`, logs: `` `${this.name} returned "${book.title}"` ``
   - Method `listBorrowedBooks()` → logs all book titles in `borrowedBooks`, or logs `"No books currently borrowed."` if empty.
2. Export `Member` as a **named export**.

---

### TASK 3 — `utils.js` | *Export Multiple at Once*

**Competency tested:** `export { }` syntax for multiple exports at once

Create a file `scripts/utils.js` with the following — **do NOT use `export` keyword inline**, instead use a **single `export { }` block at the bottom**:

1. A variable `appVersion` with value `"1.0.0"`
2. A function `formatDate(date)` → returns a string formatted as `DD/MM/YYYY` from a `Date` object.
3. A function `generateId()` → returns a random string ID (e.g., using `Math.random().toString(36).substring(2, 8)`).
4. A function `capitalize(str)` → returns the string with first letter capitalized.

Export all four using one `export { appVersion, formatDate, generateId, capitalize }` block.

---

### TASK 4 — `config.js` | *Export Default + Named*

**Competency tested:** Combining `export default` with named exports

Create a file `scripts/config.js` with:

1. A **named export** constant `MAX_BORROW_LIMIT` with value `3`.
2. A **named export** constant `APP_ENV` with value `"development"`.
3. A **default export** of an object:
   ```js
   {
     appName: "Mini Library System",
     version: "1.0.0",
     maxBooks: 3
   }
   ```

> 💡 *Senior note: You may NOT have more than one `export default` in a single module. Prove you understand this by handling it correctly here.*

---

### TASK 5 — `library.js` | *Aggregating Modules*

**Competency tested:** Module aggregation with `export { } from`

Create a file `scripts/library.js` that acts as a **single aggregation point** for the whole system. It must:

1. Re-export `Book` and `LIBRARY_NAME` from `./book.js`
2. Re-export `Member` from `./member.js`
3. Re-export `appVersion`, `formatDate`, `generateId`, `capitalize` from `./utils.js`
4. Re-export `MAX_BORROW_LIMIT` and `APP_ENV` from `./config.js`

> ⚠️ *Do NOT re-export the default export of `config.js` here — it is intentionally imported directly in `main.js` to test your understanding of default imports.*

---

### TASK 6 — `logger.js` | *Export Default Function*

**Competency tested:** `export default function`, import default with alias

Create a file `scripts/logger.js` with:

1. A **default export** of an anonymous function (or named `log`) that accepts `(level, message)` and logs:
   `` `[${level.toUpperCase()}] ${new Date().toLocaleTimeString()} — ${message}` ``

   Supported levels: `"info"`, `"warn"`, `"error"`

Example output:
```
[INFO] 10:45:22 — Application started
[WARN] 10:45:23 — Max borrow limit approaching
[ERROR] 10:45:24 — Book not found
```

---

### TASK 7 — `main.js` + `index.html` | *Entry Point — All Import Styles*

**Competency tested:** All import styles, module object (`import *`), dynamic import, `type="module"` in HTML

#### `index.html`
- Create a standard HTML file.
- Load `scripts/main.js` using `<script type="module" src="scripts/main.js"></script>`.
- Add a simple `<button id="loadReport">Load Report</button>` for the dynamic import task.

#### `main.js`

Your entry point must demonstrate **every import technique** covered in the module:

1. **Named import** from `./library.js` (the aggregate):
   ```js
   import { Book, Member, LIBRARY_NAME, appVersion, formatDate, generateId, capitalize, MAX_BORROW_LIMIT, APP_ENV } from "./library.js";
   ```

2. **Default import with alias** from `./config.js`:
   ```js
   import appConfig from "./config.js";
   ```

3. **Default import with alias** from `./logger.js`:
   ```js
   import log from "./logger.js";
   ```

4. **Alias import** — when importing `capitalize` from `./library.js`, also demonstrate that you understand aliasing by importing `generateId as createId` in a separate destructure or comment showing how it would be done:
   ```js
   import { generateId as createId } from "./utils.js";
   ```

5. **Module Object (`import *`)** — import everything from `./utils.js` as a module object:
   ```js
   import * as Utils from "./utils.js";
   ```

6. **Dynamic Import** — when the `#loadReport` button is clicked, dynamically import `./book.js` and call `getInfo()` on a new `Book` instance inside the `.then()` callback.

#### Inside `main.js`, execute the following **simulation scenario**:

```
1. Log "[INFO] Application started" using the logger.
2. Log the appConfig.appName and appVersion.
3. Log the LIBRARY_NAME.
4. Create 3 Book instances (any titles/authors/years you want).
5. Create 2 Member instances.
6. Member 1 borrows Book 1 and Book 2.
7. Member 2 borrows Book 3.
8. Member 1 tries to borrow Book 3 — but Book 3 is already borrowed. Add a check: if book.isAvailable is false, log a WARN using the logger: "Book not available."
9. Member 1 returns Book 1.
10. Log Member 1's borrowed books list.
11. Use Utils.formatDate(new Date()) to log today's date.
12. Use Utils.capitalize("javascript modules") and log the result.
13. Generate a new member ID using createId() and log it.
14. Log the MAX_BORROW_LIMIT and APP_ENV from config.
```

---

## 🧪 EVALUATION CRITERIA

Your submission will be graded on the following:

| # | Criteria | Points |
|---|----------|--------|
| 1 | Project runs without errors via Live Server | 10 |
| 2 | Correct use of `<script type="module">` in HTML | 5 |
| 3 | Named exports (inline & block style) used correctly | 15 |
| 4 | Module scope respected — no global variable leakage | 10 |
| 5 | `export default` used correctly in `config.js` and `logger.js` | 10 |
| 6 | Aggregation module (`library.js`) works correctly | 15 |
| 7 | All import styles demonstrated in `main.js` | 15 |
| 8 | Alias on import/export used correctly | 5 |
| 9 | Module Object (`import *`) used correctly | 5 |
| 10 | Dynamic module loading implemented correctly | 10 |
| **Total** | | **100** |

---

## ❌ AUTOMATIC FAIL CONDITIONS

> The following mistakes will result in an **instant fail**, regardless of other scores:

- Using `<script src="...">` without `type="module"` for module files.
- Opening `index.html` directly from filesystem (`file://`) instead of using a Live Server.
- Having more than **one `export default`** in any single file.
- Importing a module from another module that does NOT use `type="module"` in the script tag.
- Using global variables that are accessible cross-file without explicit `import`.

---

## 📤 SUBMISSION CHECKLIST

Before you submit, verify:

- [ ] Project runs on Live Server with no console errors
- [ ] All 7 files in `scripts/` are created
- [ ] `index.html` uses `type="module"`
- [ ] All 10 output scenarios in `main.js` execute correctly and appear in the browser console
- [ ] Dynamic import triggers only when the button is clicked (not on load)
- [ ] No file uses global scope to share data between modules

---

## 💬 Final Note from Senior Lead Dev

> *"I don't want to see copy-paste code. I want to see that you understand WHY we use modules — encapsulation, reusability, and clean imports. If your code works but you don't understand it, you won't pass my review.*
>
> *One last thing: run it. Open DevTools. If there are any red errors in the console — fix them before you submit. I review running code, not theory.*
>
> *Good luck. See you in the JavaScript DOM module — if you pass this.*"
>
> — **Senior Lead Dev**

---

*Module: JavaScript Modules | Author: Eko Kurniawan Khannedy | Exam Version: 1.0*
