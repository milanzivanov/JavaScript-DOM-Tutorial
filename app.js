
const bookList = document.querySelector("#book-list");
console.log("The parent node: ", bookList.parentNode);
console.log("The parent node: ", bookList.parentElement.parentElement);
console.log(bookList.childNodes);

console.log("book-list next sibling: ", bookList.nextSibling);
console.log("book-list next sibling: ", bookList.nextElementSibling);

console.log("book-list previous sibling is: ", bookList.previousSibling);
console.log("book-list element sibling is: ", bookList.previousElementSibling);


bookList.previousElementSibling.querySelector("p").innerHTML += "<br /> Too cool for everyone else"