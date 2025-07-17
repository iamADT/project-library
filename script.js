const myLibrary = [];

function Book(name, author, yearPublished) {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.year = yearPublished;
}

function addBookToLibrary(name, author, yearPublished) {
    const libraryBook = new Book(name, author, yearPublished);
    myLibrary.push(libraryBook);
}

addBookToLibrary("1984", "George Orwell", 1949);
addBookToLibrary("Brave New World", "Aldous Huxley", 1932);
console.log(myLibrary);


//display books
const bookContainer = document.getElementById('library-books-container');

function displayBooks() {
  while (bookContainer.firstChild) {
  bookContainer.removeChild(bookContainer.firstChild);
}

  myLibrary.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    const bookTitle = document.createElement('h3');
    bookTitle.classList.add('book-card-title');
    bookTitle.textContent = book.name;

    const cardBody = document.createElement('div');
    cardBody.classList.add('book-card-body');

    const bookDetails = document.createElement('p');
    bookDetails.textContent = `Author: ${book.author}, Year: ${book.year}`;

    cardBody.appendChild(bookDetails);
    bookCard.appendChild(bookTitle);
    bookCard.appendChild(cardBody);
    bookContainer.appendChild(bookCard);
  });
}

displayBooks();

//user adds books
const addBookButton = document.getElementById('add-a-book');
const closeButton = document.getElementById('close-modal');
const modal = document.getElementById('book-modal');
const submitButton = document.getElementById('submit-book')

addBookButton.addEventListener('click', () =>{
  modal.classList.remove('hidden');
}
)

submitButton.addEventListener('click', function(){
  event.preventDefault();
  const title = document.getElementById('title').value.trim();
  const author = document.getElementById('author').value.trim();
  const year = document.getElementById('year').value;
  addBookToLibrary(title, author, year);
  displayBooks();
  modal.classList.add('hidden');
})

closeButton.addEventListener('click', () => {
  modal.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    modal.classList.add('hidden');
  }
});
