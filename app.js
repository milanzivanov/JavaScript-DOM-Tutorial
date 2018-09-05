const banner = document.getElementById("page-banner");
const bookList = document.getElementById("book-list");

let titles = document.getElementsByClassName("title");
let lis = document.getElementsByTagName("li");


// chaking is something a array
console.log(Array.isArray(titles));

// transforming to array
console.log(Array.isArray(Array.from(titles)));


Array.from(titles).forEach((item) => {
    console.log(item);
});

for(i=0; i < titles.length; i++) {
    console.log(titles[i]);
}


const wmf = document.querySelector("#book-list li:nth-child(2) .name")
// console.log(wmf);
var books = document.querySelectorAll("#book-list li .name");
// console.log(books);

Array.from(books).forEach(book => console.log(book));


