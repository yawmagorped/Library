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

addBookToLibrary("literally 1984", "literally the guy who wrote it", 6969, true);
addBookToLibrary("1985", "josh cornell", 12, false);
addBookToLibrary("book about that one guy who died", "albert burger", 632, false);
addBookToLibrary("liberals have ruined my life", "divorced dad", 2116, true);

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    return newBook;
}

const cardContainer = document.querySelector(".card-container");


function displayBooks() {
    myLibrary.forEach(book => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `<div class="top"><p>${book.title}</p><p>${book.author}</p></div><div class="middle"><button>I read it</button><button>Remove</button></div><div class="bottom"><p>${book.isReadText()}</p><p>${book.pages}</p></div>`
        cardContainer.append(card);
    });
}


displayBooks();