const bookList = document.getElementById("BookList");
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
   
    myLibrary.forEach(
        book => {
           
            const row = document.createElement("tr");
        
            const title = document.createElement("td");
            title.textContent = book.title;
            row.appendChild(title);

            const author = document.createElement("td");
            author.textContent = book.title;
            row.appendChild(author);

            const releaseYear = document.createElement("td");
            releaseYear.textContent = book.releaseYear;
            row.appendChild(releaseYear);

            bookList.appendChild(row);
            
        }
    );
}

const toKillAMockingBird = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
addBookToLibrary(toKillAMockingBird);

const greenEggsAndHam = new Book("Green Eggs and Ham", "Dr. Seuss", 1960);
addBookToLibrary(greenEggsAndHam);

displayBooks();