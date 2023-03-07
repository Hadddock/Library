const bookList = document.getElementById("BookList");
const myLibrary = [];

function addBookToLibrary(book) {
  myLibrary.push(book);
}

// eslint-disable-next-line no-unused-vars
function toggleForm() {
  const form = document.getElementById("bookForm");
  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function Book(title, author, releaseYear, read = false) {
  this.title = title;
  this.author = author;
  this.releaseYear = releaseYear;
  this.read = read;
}

function displayBooks() {
  bookList.replaceChildren();
  myLibrary.forEach((book) => {
    const row = document.createElement("tr");

    const title = document.createElement("td");
    title.textContent = book.title;
    row.appendChild(title);

    const author = document.createElement("td");
    author.textContent = book.author;
    row.appendChild(author);

    const releaseYear = document.createElement("td");
    releaseYear.textContent = book.releaseYear;
    row.appendChild(releaseYear);

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

    bookList.appendChild(row);
  });
}

function submitBook(e) {
  if (e.preventDefault) e.preventDefault();
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const releaseYear = document.getElementById("releaseYear");
  const read = document.getElementById("read");

  if (title.value && author.value && releaseYear) {
    addBookToLibrary(
      new Book(title.value, author.value, releaseYear.value, read.value)
    );
    displayBooks();
  }

  return false;
}

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", submitBook);

const toKillAMockingBird = new Book(
  "To Kill a Mockingbird",
  "Harper Lee",
  1960
);
addBookToLibrary(toKillAMockingBird);

const greenEggsAndHam = new Book("Green Eggs and Ham", "Dr. Seuss", 1960);
addBookToLibrary(greenEggsAndHam);

displayBooks();
