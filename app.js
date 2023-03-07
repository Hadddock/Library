const bookList = document.getElementById("bookList");
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

function Book(title, author, pages, read = false) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function toggleRead(e) {
  console.log(e.target["data-index"]);

  myLibrary.at(e.target["data-index"]).read = !myLibrary.at(
    e.target["data-index"]
  ).read;
  displayBooks();
}

function deleteBook(e) {
  myLibrary.splice(e.target["data-index"], 1);
  displayBooks();
}

function displayBooks() {
  bookList.replaceChildren();
  let index = 0;
  myLibrary.forEach((book) => {
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
    deleteButton.onclick = deleteBook;
    readButton["data-index"] = index;
    readButton.onclick = toggleRead;
    index += 1;

    bookList.appendChild(row);
  });
}

function submitBook(e) {
  if (e.preventDefault) e.preventDefault();
  const title = document.getElementById("title");
  const author = document.getElementById("author");
  const pages = document.getElementById("pages");
  const read = document.getElementById("read");

  if (title.value && author.value && pages) {
    addBookToLibrary(
      new Book(title.value, author.value, pages.value, read.value)
    );
    displayBooks();
  }

  return false;
}

const bookForm = document.getElementById("bookForm");
bookForm.addEventListener("submit", submitBook);

const toKillAMockingBird = new Book("To Kill a Mockingbird", "Harper Lee", 321);
addBookToLibrary(toKillAMockingBird);

const greenEggsAndHam = new Book("Green Eggs and Ham", "Dr. Seuss", 296, true);

addBookToLibrary(greenEggsAndHam);

displayBooks();
