document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formSubmit = document.querySelector('#new-item-form');
  formSubmit.addEventListener('submit', handleFormsubmit);

  const deleteAll = document.querySelector('#delete');
  deleteAll.addEventListener('click', handleDeleteClick);
});

const handleFormsubmit = function (event) {
  event.preventDefault();
  const newBook = document.createElement('li');

  const bookTitle = document.createElement('h3');
  const bookAuthor = document.createElement('h4');
  const bookCat = document.createElement('p');

  const {
    target: {
      title: { value: titleText },
    },
  } = event;
  bookTitle.textContent = titleText;
  bookAuthor.textContent = event.target.author.value;
  bookCat.textContent = event.target.category.value;

  newBook.appendChild(bookTitle);
  newBook.appendChild(bookAuthor);
  newBook.appendChild(bookCat);

  newBook.classList.add('book');

  const bookList = document.querySelector('#reading-list');
  bookList.appendChild(newBook);

  document.getElementById('new-item-form').reset();
};

const handleDeleteClick = function () {
  const bookList = document.querySelector('#reading-list');
  while (bookList.hasChildNodes()) {
    bookList.removeChild(bookList.firstChild);
  }
};
