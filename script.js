const myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.info = function() {
        let isReadTxt;
        if(isRead)
            isReadTxt = "has read";
        else
            isReadTxt = "not read yet";
        return (title + author + pages + isReadTxt);
    } 
}

function addBookToLibrary(title, author, pages, isRead) {
    let newBook = new Book(title, author, pages, isRead);
    myLibrary.push(newBook);
    return newBook;
}