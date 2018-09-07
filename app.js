const list = document.querySelector("#book-list ul");

// delite book
list.addEventListener("click", (e) => {
    if (e.target.className === "delete") {
        const li = e.target.parentElement;
        // li.parentNode.removeChild(li);
        list.removeChild(li);
    }
})


// add books
const addForm = document.forms["add-book"];
addForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const value = addForm.querySelector("input[type='text']").value;
    // console.log('value', value);

    // create elements
    const li = document.createElement("li");
    const bookName = document.createElement("span");
    const deleteBtn = document.createElement("span");

    // add content
    deleteBtn.textContent = "delite";
    bookName.textContent = value;

    // add classes
    bookName.classList.add("name");
    deleteBtn.classList.add("delete");

    // append to document
    li.appendChild(bookName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
});

// hide books
const hideBox = document.querySelector("#hide");
hideBox.addEventListener("change", function(e) {
    if (hideBox.checked) {
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});

// filter book
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e) {
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book) {
        const title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    })

});