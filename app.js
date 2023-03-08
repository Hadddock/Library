// eslint-disable-next-line max-classes-per-file
const bookList = document.getElementById("bookList");

// eslint-disable-next-line no-unused-vars
function toggleForm() {
  const form = document.getElementById("bookForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

class Library {
  books = [];

  addBook(book) {
    this.books.push(book);
  }

  deleteBook(e) {
    this.books.splice(e.target["data-index"], 1);
    this.displayBooks();
  }

  submitBook(e) {
    if (e.preventDefault) e.preventDefault();
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const pages = document.getElementById("pages");
    const read = document.getElementById("read");

    if (title.value && author.value && pages.value) {
      this.addBook(
        new Book(title.value, author.value, pages.value, read.value)
      );
      this.displayBooks();
    }

    return false;
  }

  toggleRead(e) {
    this.books.at(e.target["data-index"]).read = !this.books.at(
      e.target["data-index"]
    ).read;
    this.displayBooks();
  }

  displayBooks() {
    bookList.replaceChildren();
    let index = 0;
    this.books.forEach((book) => {
      const row = document.createElement("tr");

      const title = document.createElement("td");
      title.textContent = book.title;
      row.appendChild(title);

      const author = document.createElement("td");
      author.textContent = book.author;
      row.appendChild(author);

      const pages = document.createElement("td");
      pages.textContent = book.pages;
      row.appendChild(pages);

      const read = document.createElement("td");
      read.textContent = book.read ? "Read" : "Not Read";
      row.appendChild(read);

      const readButtonParent = document.createElement("td");
      const readButton = document.createElement("button");
      readButton.textContent = "Book Read";
      readButtonParent.appendChild(readButton);
      row.appendChild(readButtonParent);

      const deleteButtonParent = document.createElement("td");
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Remove Book";
      deleteButtonParent.appendChild(deleteButton);
      row.appendChild(deleteButtonParent);

      deleteButton["data-index"] = index;
      deleteButton.addEventListener("click", this.deleteBook.bind(this));
      readButton["data-index"] = index;
      readButton.addEventListener("click", this.toggleRead.bind(this));

      index += 1;

      bookList.appendChild(row);
    });
  }
}

const myLibrary = new Library();

myLibrary.addBook(new Book("To Kill a Mockingbird", "Harper Lee", 321));
myLibrary.addBook(new Book("Green Eggs and Ham", "Dr. Seuss", 296, true));

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", myLibrary.submitBook.bind(myLibrary));
myLibrary.displayBooks();
