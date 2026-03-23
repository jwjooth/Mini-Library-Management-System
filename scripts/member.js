class Member {
  constructor(name, memberId) {
    this.name = name;
    this.memberId = memberId;
    this.borrowedBooks = [];
  }
  borrowBook(book) {
    if (!book.isAvailable) {
      console.log(`Book not available`);
    }
    book.borrow();
    this.borrowedBooks.push(book);
    console.log(`${this.name} borrowed "${book.title}"`);
  }
  returnBook(book) {
    book.returnBook();
    this.borrowedBooks = this.borrowedBooks.filter((item) => item !== book);
    console.log(`${this.name} returned "${book.title}"`);
  }
  listBorrowedBooks() {
    if (this.borrowedBooks.length !== 0) {
      console.log(this.borrowedBooks.map((book) => book.title));
    } else {
      console.log(`No books currently borrowed`);
    }
  }
}

export { Member };
