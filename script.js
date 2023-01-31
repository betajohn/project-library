const myLibrary = [];

function Book(title, author, year, pages, read) {
  this.title = title;
  this.author = author;
  this.year = year;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

addBookToLibrary(new Book('Snow White', 'Grimm brothers', 1812, 216, false));
addBookToLibrary(new Book('Anna Karenina', 'Leon Tolstoi', 1875, 800, false));
addBookToLibrary(
  new Book('To Kill a Mockingbird', 'Harper Lee', 1960, 281, false)
);
addBookToLibrary(
  new Book('Cien Años de Soledad', 'Gabriel Garcia Marquez', 1966, 496, false)
);
addBookToLibrary(
  new Book('Don Quijote', 'Miguel de Cervantes', 1615, 1424, false)
);
addBookToLibrary(
  new Book('Whuthering Heights', 'Emily Bronte', 1847, 464, false)
);
addBookToLibrary(new Book('Ulysses', 'James Joyce', 1920, 783, false));

const bookdisplay = document.querySelector('.book-display');

for (let i = 0; i < myLibrary.length; i += 1) {
  const divBook = document.createElement('div');

  const bookTitle = document.createElement('h2');
  bookTitle.textContent = myLibrary[i].title;
  divBook.appendChild(bookTitle);

  const bookAuthor = document.createElement('p');
  bookAuthor.textContent = myLibrary[i].author;
  divBook.appendChild(bookAuthor);

  const bookYear = document.createElement('p');
  bookYear.textContent = myLibrary[i].year;
  divBook.appendChild(bookYear);

  const bookPages = document.createElement('p');
  bookPages.textContent = `${myLibrary[i].pages} pages.`;
  divBook.appendChild(bookPages);

  const bookRead = document.createElement('p');
  bookRead.textContent = `Read: ${myLibrary[i].read}.`;
  divBook.appendChild(bookRead);

  divBook.classList.add('book');
  bookdisplay.appendChild(divBook);
}
