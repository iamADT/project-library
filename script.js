// Array to hold the books
const myLibrary = [];

function Book(name, author, yearPublished, status = 'Unread') {
  this.id = crypto.randomUUID();
  this.name = name;
  this.author = author;
  this.year = yearPublished;
  this.status = status;
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

    //delete a book
    const deleteBook = document.createElement('img');
    deleteBook.classList.add('delete-book');
    deleteBook.src = './assets/trash-solid.svg';
    
    deleteBook.addEventListener('click', () => {
    const index = myLibrary.findIndex(item => item.id === book.id);
    if (index !==-1){
    myLibrary.splice(index, 1);
    displayBooks();
      }
    });


    //mark book as read/unread
    const statusPill = document.createElement('div');
    statusPill.className = book.status === 'Read' ? 'status-read' : 'status-pill';
    const readStatus = document.createElement('p');
    readStatus.textContent = book.status;
    statusPill.appendChild(readStatus);

    statusPill.addEventListener('click', () => {
      if (book.status === 'Unread') {
        book.status = 'Read';
        readStatus.textContent = 'Read';
        statusPill.className = 'status-read';
      } else {
        book.status = 'Unread';
        readStatus.textContent = 'Unread';
        statusPill.className = 'status-pill';
      }
    });

    
    //Append content
    const bookCardContent = document.createElement('div');
    bookCardContent.classList.add('book-content');

    cardBody.appendChild(bookDetails);
    bookCardContent.appendChild(statusPill);
    bookCardContent.appendChild(bookTitle);
    bookCardContent.appendChild(cardBody);
    bookCard.appendChild(bookCardContent);
    bookCard.appendChild(deleteBook);
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

submitButton.addEventListener('click', function(event){
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

