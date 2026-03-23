import { MAX_BORROW_LIMIT } from "./config.js";

class Member {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }
  borrowBook(book) {
    if (!book.isAvailable) {
      return `Book not available`;
    }
    if (this.borrowedBooks.length >= MAX_BORROW_LIMIT) {
      return `${this.name} has reached the borrow limit (${MAX_BORROW_LIMIT})`;
    }
    book.borrow();
    this.borrowedBooks.push(book);
    return `${this.name} borrowed "${book.title}"`;
  }
  returnBook(book) {
    book.returnBook();
    this.borrowedBooks = this.borrowedBooks.filter((item) => item !== book);
    return `${this.name} returned "${book.title}"`;
  }
  listBorrowedBooks() {
    if (this.borrowedBooks.length !== 0) {
      return this.borrowedBooks.map((book) => book.title);
    } else {
      return `No books currently borrowed`;
    }
  }
}

export { Member };
