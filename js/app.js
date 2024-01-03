const titleElem = document.getElementById('title');
const authorElem = document.getElementById('author');
const yearElem = document.getElementById('year');
const addBookBtn = document.querySelector('.btn');
const tbody = document.getElementById('book-list');
let bookArray = [];

function emptyInputs() {
    titleElem.value = '';
    authorElem.value = '';
    yearElem.value = '';
};

function createAddRow(allBook) {
    tbody.innerHTML = '';

    allBook.forEach((book) => {

        let titleInput = document.createElement('th');
        titleInput.innerHTML = book.title;

        let authorInput = document.createElement('th');
        authorInput.innerHTML = book.author;

        let yearInput = document.createElement('th');
        yearInput.innerHTML = book.year;

        let trElem = document.createElement('tr');
        trElem.append(titleInput, authorInput, yearInput);

        tbody.append(trElem);

    });
    emptyInputs()
};

function setDateStorage(allBook) {
    localStorage.setItem('books', JSON.stringify(allBook));
    createAddRow(allBook);
}

addBookBtn.addEventListener('click', (event) => {
    event.preventDefault();

    if (titleElem.value === '' || authorElem.value === '' || yearElem.value === '') {
        alert('please enter the inputs')
    } else {
        let bookObject = {
            id: bookArray.length + 1,
            title: titleElem.value,
            author: authorElem.value,
            year: yearElem.value
        };
        bookArray.push(bookObject);
        setDateStorage(bookArray);
    }

})

window.addEventListener('load', () => {
    let localStorageBooks = localStorage.getItem('books');

    if (localStorageBooks) {
        bookArray = JSON.parse(localStorageBooks);
        createAddRow(bookArray)
    }
})
