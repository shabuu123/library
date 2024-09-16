let addBtn = document.querySelector(".Add-btn");
let form = document.querySelector(".form");
let subBtn = document.querySelector(".sub-btn");
const title = document.getElementById("title");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const bookContainer = document.querySelector(".books");


let books = [];
let flag = false;

addBtn.addEventListener("click", () => {
    flag = !flag;
    form.style.visibility = flag ? "visible" : "hidden";
    form.style.display = "block";
    title.value = "";
    author.value = "";
    pages.value = "";
    
});

subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    form.style.display = "none";
    flag = !flag
    // bookContainer.style.display = "block"
    const book =  createBook(title.value, author.value, pages.value);
    books.push(book);
    bookContainer.innerHTML = "";
    books.forEach((book) => {
        const div = document.createElement('div');
        div.setAttribute("id", "cards")
        div.style.backgroundColor = "pink"
        const titleP = document.createElement('p');
        const authorP = document.createElement('p');
        const pagesP = document.createElement('p');
        const readBtn = document.createElement('button');
        const removeBtn = document.createElement('button');
        
        titleP.textContent = book.title;
        titleP.setAttribute("class", "bookTitle");
        div.appendChild(titleP);

        authorP.textContent = book.author;
        authorP.setAttribute("class", "bookAuthor");
        div.appendChild(authorP);

        pagesP.textContent = book.pages;
        pagesP.setAttribute("class", "bookPages");
        div.appendChild(pagesP);

        readBtn.textContent = 'Read';
        readBtn.setAttribute("class", "readBtn");
        div.appendChild(readBtn);

        removeBtn.textContent = 'Remove';
        removeBtn.setAttribute("class", "removeBtn");
        div.appendChild(removeBtn);

        bookContainer.appendChild(div);

        readBtn.addEventListener("click", () => {
            if (readBtn.style.backgroundColor === "green") {
                readBtn.textContent = 'Not read';
                readBtn.style.backgroundColor = "red";
            } else {
                readBtn.style.backgroundColor = "green";
                readBtn.textContent = 'Read';
            }
        })
        removeBtn.addEventListener("click", () =>{
          bookContainer.style.display = "none"  
        })
    })

    // Show the book container
    bookContainer.style.visibility = "visible";
    
});


function createBook(title, author, pages) {
    return {
        title,
        author,
        pages
    };

}