const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.isReadText = function() {
        let isReadTxt;
        if(isRead)
            isReadTxt = "has read";
        else
            isReadTxt = "not read yet";
        return isReadTxt;
    } 
}

const cardContainer = document.querySelector(".card-container");
const addBtn = document.createElement("div");

let isFormActive = false;
const cards =[];

Book.prototype.displayBook = function() {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="top"><p>${this.title}</p><p>${this.author}</p></div><div class="middle"><button>I read it</button><button>Remove</button></div><div class="bottom"><p>${this.isReadText()}</p><p>${this.pages}</p></div>`
    cards.push(card);
    cardContainer.append(card);
    this.card = card; 
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    newBook.displayBook();
    myLibrary.push(newBook);
    return newBook;
}

addBookToLibrary("literally 1984", "literally the guy who wrote it", 6969, true);
addBookToLibrary("1985", "josh cornell", 12, false);
addBookToLibrary("book about that one guy who died", "albert burger", 632, false);
addBookToLibrary("liberals have ruined my life", "divorced dad", 2116, true);
updateBooks();

addBtn.addEventListener('click', () => {
    isFormActive = true;
    updateBooks();
});


function updateBooks() {
    if (isFormActive) {
        addForm();
    }
    addBtn.classList.add("add-card");
    addBtn.innerHTML = `<button>+</button>`;
    cardContainer.append(addBtn);
}

function addForm() {
    
}

function removeBooks() {

}