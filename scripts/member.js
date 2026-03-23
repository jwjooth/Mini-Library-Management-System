class Member {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }
  borrowBook(book) {
    book.borrow();
    this.borrowedBooks.push(book);
    return `${this.name} borrowed "${book.title}`;
  }
  returnBook(book) {
    book.returnBook();
    this.borrowedBooks.filter((item) => item !== book);
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
