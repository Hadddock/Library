const myLibrary = [];

function Book(title, author, releaseYear) {
    this.title = title;
    this.author = author;
    this.releaseYear = releaseYear;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    myLibrary.forEach(book => console.log(book.title));
}

const toKillAMockingBird = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
addBookToLibrary(toKillAMockingBird);

const greenEggsAndHam = new Book("Green Eggs and Ham", "Dr. Seuss", 1960);
addBookToLibrary(greenEggsAndHam);

displayBooks();