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

const bookContainer = document.getElementById('library-books');

const bookCard = document.createElement('div');
bookCard.className = 'book-card';

const bookTitle = document.createElement('h3');
bookTitle.classList.add('book-card-title');

const cardBody = document.createElement('div');
cardBody.classList.add('book-card-body');



function displayBooks(){
  for (let i =1; i<myLibrary.length; i++){
  const paragraph = document.createElement('p');
  paragraph.textContent = myLibrary[i]
  cardBody.appendChild(paragraph);
}
bookCard.appendChild(bookTitle);
bookCard.appendChild(cardBody);
bookContainer.appendChild(bookCard);
}