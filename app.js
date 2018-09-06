
const wmf = document.querySelector("#book-list li:nth-child(2) .name")
// console.log(wmf);
var books = document.querySelectorAll("#book-list li .name");
// console.log(books);

books.forEach(book => {
    book.textContent += ' (book title)';
});

const bookList2 = document.querySelector("#book-list");
// bookList2.innerHTML = "<h2> Books and more books...</h2>";
bookList2.innerHTML += "<p>Added on html</p>";


const banner = document.querySelector("#page-banner");
console.log('banner type is:', banner.nodeType);
console.log('banner name is:', banner.nodeName);
console.log('banner has childs:', banner.hasChildNodes);


const cloneBanner = banner.cloneNode(true);
console.log(cloneBanner);

const bookList3 = document.querySelector("#book-list");
console.log("The parent node: ", bookList3.parentNode);
console.log("The parent node: ", bookList3.parentElement.parentElement);

console.log(bookList3.childNodes);
