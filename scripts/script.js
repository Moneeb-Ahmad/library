let myLibrary = [];
let libInd = 0;
const container = document.querySelector('.container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
	this.info = function() {
	let r = read ? "read" : "not read yet";
	return `${title} \r\nBy: \r\n${author} \r\n${pages} pages \r\n${r}`;
}
}

function addBookToLibrary() {
  let title = "The Hobbit"//window.prompt("Title of book?");
  let author = "John Doe"//window.prompt("Author of book?");
  let pages = 21//Number(window.prompt("Pages of book?"));
  let read = "y"//window.prompt("Have you read the book?");
  let readBool = read.includes("y") || read.includes("Y") ? true : false;
  let newBook = new Book(title, author, pages, readBool);
  myLibrary.push(newBook);
}

function displayLibrary() {
	let count = libInd;
  for (let i = libInd; i < myLibrary.length; i++) {
    const div = document.createElement('div');
    applyDivStyleGeneral(div,i);
    div.classList.add('gridItem');
		container.appendChild(div);
		count++;
  }
	libInd = count;
}

function applyDivStyleGeneral(div,i) {
	div.textContent = `${myLibrary[i].info()}`;
  div.setAttribute(
    'style',
    `display: flex;
		padding: 8px 0px 8px 8px;
		white-space: pre-wrap;
		flex-direction: column;
    border-width: 1px;
    border-style: solid;
    border-color: black;
		font-size: 24px;
    background-color: #ffbfcc;
    box-sizing: border-box;
		text-align: left;
		flex-wrap: wrap;
		overflow: hidden;
		text-overflow: ellipsis;
		align-items: center;
		justify-content: center;
    width: clamp(150px, 80%, 400px);
    height: auto;`
  );
}
