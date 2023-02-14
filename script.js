const myLibrary = [];
const bookdisplay = document.querySelector('.book-display');
const modal = document.getElementById('modal');
const form = document.querySelector('form');

form.addEventListener('submit', handleForm);
function handleForm(event) {
  event.preventDefault();
  modal.close();
  form.reset();
}

class Book {
  constructor(title, author, year, pages, read) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary(book) {
  myLibrary.push(book);
  const divBook = document.createElement('div');

  const bookTitle = document.createElement('h2');
  bookTitle.textContent = book.title;
  divBook.appendChild(bookTitle);

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = book.author;
  divBook.appendChild(bookAuthor);

  const bookYear = document.createElement('p');
  bookYear.textContent = book.year;
  divBook.appendChild(bookYear);

  const bookPages = document.createElement('p');
  bookPages.textContent = `${book.pages} pages.`;
  divBook.appendChild(bookPages);

  const bookRead = document.createElement('p');
  bookRead.textContent = `Read: ${book.read}.`;
  divBook.appendChild(bookRead);

  const readBtn = document.createElement('button');
  readBtn.textContent = book.read;
  readBtn.onclick = () => {
    if (book.read === 'read') {
      readBtn.textContent = 'not read';
      myLibrary[myLibrary.indexOf(book)].read = 'not read';
    } else {
      readBtn.textContent = 'read';
      myLibrary[myLibrary.indexOf(book)].read = 'read';
    }
  };
  divBook.appendChild(readBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = () => {
    myLibrary.splice(myLibrary.indexOf(book), 1);
    bookdisplay.removeChild(divBook);
  };

  divBook.appendChild(deleteBtn);

  divBook.classList.add('book');
  bookdisplay.appendChild(divBook);
}

addBookToLibrary(
  new Book('Snow White', 'Grimm brothers', 1812, 216, 'not read')
);
addBookToLibrary(
  new Book('Anna Karenina', 'Leon Tolstoi', 1875, 800, 'not read')
);
addBookToLibrary(
  new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 281, 'not read')
);
addBookToLibrary(
  new Book(
    'Cien Años de Soledad',
    'Gabriel Garcia Marquez',
    1966,
    496,
    'not read'
  )
);
addBookToLibrary(
  new Book('Don Quijote', 'Miguel de Cervantes', 1615, 1424, 'not read')
);
addBookToLibrary(
  new Book('Whuthering Heights', 'Emily Bronte', 1847, 464, 'not read')
);
addBookToLibrary(new Book('Ulysses', 'James Joyce', 1920, 783, 'not read'));

const addBookBtn = document.querySelector('.add-book');
addBookBtn.addEventListener('click', addBook);

const cancelBtn = document.querySelector('.close-modal');
cancelBtn.addEventListener('click', closeModal);

function addBook() {
  modal.showModal();
}

function closeModal() {
  modal.close();
}

const submitBtn = document.querySelector('.submit');
submitBtn.addEventListener('click', submit);

function submit() {
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const year = document.getElementById('year');
  const pages = document.getElementById('pages');
  const readstatus = document.querySelector('input[name="status"]:checked').id;
  let read;
  if (readstatus === 'read') {
    read = 'read';
  } else {
    read = 'not read';
  }
  addBookToLibrary(
    new Book(title.value, author.value, year.value, pages.value, read)
  );
}
