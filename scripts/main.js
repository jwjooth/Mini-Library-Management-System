import {
  Book,
  Member,
  appVersion,
  formatDate,
  generateId,
  capitalize,
  MAX_BORROW_LIMIT,
  APP_ENV,
} from "./library.js";
import aliasConfig from "./config.js";
import aliasLog from "./logger.js";
import { generateId as createId } from "./library.js";
import * as Utils from "./utils.js";
import { LIBRARY_NAME } from "./book.js";

console.info("== 1 ==");
console.log(aliasLog("info", "Application Started"));
console.info("== 2 ==");
console.log(aliasConfig.appName + " " + appVersion);
console.info("== 3 ==");
console.log(LIBRARY_NAME);
console.info("== 4 ==");
const book1 = new Book("Security Analyst", "Benjamin Graham", 2008);
const book2 = new Book("The Intellegent Investor", "Benjamin Graham", 2009);
const book3 = new Book("Rich Dad Poor Dad", "Robert Kiyosaski", 2013);
console.info("== 5 ==");
const member1 = new Member("Warren Buffet", generateId());
const member2 = new Member("Charlie Mungger", generateId());
console.info("== 6 ==");
member1.borrowBook(book1);
member1.borrowBook(book2);
console.info("== 7 ==");
member2.borrowBook(book3);
console.info("== 8 ==");
member1.borrowBook(book3);
console.info("== 9 ==");
console.log(member1.returnBook(book1));
console.info("== 10 ==");
console.log(member1);
console.info("== 11 ==");
console.log(formatDate(new Date()));
console.info("== 12 ==");
console.log(capitalize("javascript modules"));
console.info("== 13 ==");
console.log(createId());
console.info("== 14 ==");
console.log(MAX_BORROW_LIMIT + " " + APP_ENV);
