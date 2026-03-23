const LIBRARY_NAME = "Perpustakaan Maju Jaya";

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.isAvailable = true;
  }
  getInfo() {
    return `[Book] ${this.title} by ${this.author} (${this.year})`;
  }
  borrow() {
    this.isAvailable = false;
    return `"${this.title} has been borrowed."`;
  }
  returnBook() {
    this.isAvailable = true;
    return `"${this.title} has been returned"`;
  }
}

export { Book, LIBRARY_NAME };