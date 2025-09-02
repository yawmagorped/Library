const myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
    }
    isReadText = function () {
        let isReadTxt;
        if (this.isRead)
            isReadTxt = "has read";

        else
            isReadTxt = "not read yet";
        return isReadTxt;
    };
    displayBook() {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<div class="top"><p>${this.title}</p><p>${this.author}</p></div><div class="middle" data-id="${this.id}"><button>Chage read status</button><button>Remove</button></div><div class="bottom"><p data-p-id="${this.id}">${this.isReadText()}</p><p>${this.pages}</p></div>`;
        cards.push(card);
        cardContainer.append(card);
        this.card = card;
    }
    removeBook() {
        this.card.remove();
        let index = myLibrary.indexOf(this);
        myLibrary.splice(index, 1);
    }
}

const cardContainer = document.querySelector(".card-container");
const addBtn = document.createElement("div");

let isFormActive = false;
const cards =[];



let id = 0;

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    newBook.id = id;
    id++;
    newBook.displayBook();
    myLibrary.push(newBook);
    return newBook;
}

addBookToLibrary("literally 1984", "literally the guy who wrote it", 6969, true);
addBookToLibrary("1985", "josh cornell", 12, false);
addBookToLibrary("book about that one guy who died", "albert burger", 632, false);
addBookToLibrary("liberals have ruined my life", "divorced dad", 2116, true);
addBookToLibrary("literally 1983", "literally the guy who wrote it", 6969, true);
addBookToLibrary("literally 1982", "literally the guy who wrote it", 6969, true);
addBookToLibrary("literally 1981", "literally the guy who wrote it", 6969, true);
addBookToLibrary("literally 1980", "literally the guy who wrote it", 6969, true);
addBookToLibrary("literally 1979", "literally the guy who wrote it", 6969, true);
updateBooks();

addBtn.addEventListener('click', () => {
    isFormActive = true;
    updateBooks();
});

let btn;
let p;

myLibrary.forEach(book => {
    addBtnEventListeners(book);
});

function addBtnEventListeners(book) {
    btn = document.querySelector(`[data-id="${book.id}"] > :last-child`);
    btn.addEventListener('click', () => {
        book.removeBook()
    });
    btn = document.querySelector(`[data-id="${book.id}"] > :first-child`);
    btn.addEventListener('click', () => {
        book.isRead = !book.isRead;
        p = document.querySelector(`[data-p-id="${book.id}"]`);
        console.log(book.isReadText());
        p.textContent = book.isReadText();
    });

}
function updateBooks() {
    if (isFormActive) {
        addForm();
    }
    addBtn.classList.add("add-card");
    addBtn.innerHTML = `<button>+</button>`;
    cardContainer.append(addBtn);
}

const form = document.createElement("form");
form.classList.add("card-form")
form.innerHTML = `
        <form class="card-form">
            <div class="top-form">
                <input type="text" name="input-title" required >
                <input type="text" name="input-author" required >
            </div>

            <div class="middle-form">
                <button>Submit</button>
                <button>Close</button>
            </div>

            <div class="bottom-form">
                <div class="isRead-form">
                    <div class="isRead-form-top">
                        <label for="has-read">has read</label>
                        <input type="radio" id="has-read" name="read-status" value="true" checked >
                    </div>
                    <div class="isRead-form-bottom">
                        <label for="hasnt-read">hasn't read</label>
                        <input type="radio" id="hasnt-read" name="read-status" value="false">
                    </div>
                </div>
                <input type="number" name="input-pages" required >
            </div>
        </form>
`
let submitBtn;
let closeBtn; 
let titleInput;
let authorInput;
let pagesInput;


let isInitialized = false;
function addForm() {
    cardContainer.append(form);
    if(!isInitialized) {
        submitBtn = document.querySelector(".middle-form > :first-child");
        closeBtn = document.querySelector(".middle-form > :last-child");
        titleInput = document.querySelector(".top-form > :first-child");
        authorInput = document.querySelector(".top-form > :last-child");
        pagesInput = document.querySelector('[name="input-pages"]');
        submitBtn.addEventListener('click', (event) => {
            titleInput.reportValidity();
            if (titleInput.validity.valueMissing) {
                titleInput.setCustomValidity("enter a title");
                return;
            }   else 
                titleInput.setCustomValidity("");
            if (authorInput.validity.valueMissing) {
                authorInput.setCustomValidity("enter the author name");
                return;
            }   else 
                authorInput.setCustomValidity("");            
            if (pagesInput.validity.valueMissing) {
                pagesInput.setCustomValidity("enter number of pages");
                return;
            }   else 
                pagesInput.setCustomValidity("");

            submit();
        });
        closeBtn.addEventListener('click', (event) => {
            closeForm();
        });
        isInitialized = true;
    }
}



function submit() {
    let isReadInputs = document.querySelector(".isRead-form input:checked");
    
    let readBool 
    if(isReadInputs.value = "true")
        readBool = true;
    else
        readBool = false;

    let newBook = addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readBool);
    addBtnEventListeners(newBook);
    closeForm();
    updateBooks();
}
function closeForm() {
    isFormActive = false;
    form.remove();
}