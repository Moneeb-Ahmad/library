let myLibrary = [];
const container = document.querySelector('.container');
let tester = 0;


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

function addBookToLibrary(form) {
  let title = form.title.value;
  let author = form.author.value;
  let pages = Number(form.page.value);
  let read = form.read.value;
  let readBool = read === "Y" ? true : false;
  let newBook = new Book(title, author, pages, readBool);
  myLibrary.push(newBook);
  displayLibrary();
  reset(form);
  closeForm();
}

function addBookToLibraryTest() {
  let title = "t";
  let author = "a";
  let pages = tester;
  let read = "n";
  let readBool = read === "Y" ? true : false;
  let newBook = new Book(title, author, pages, readBool);
  myLibrary.push(newBook);
  displayLibrary();
	tester++;
}

function displayLibrary() {
  removeAllChildrenFromContainer();
  for (let i = 0; i < myLibrary.length; i++) {
    const div = document.createElement('div');
    const btn = document.createElement('button');
    applyDivStyleGeneral(div, i);
		applyButtonStyle(btn);
		btn.addEventListener('click', removeBtnClick);
    div.appendChild(btn);
    container.appendChild(div);
    console.log(div.getAttribute('data-key'));
  }
}

function removeAllChildrenFromContainer() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function applyDivStyleGeneral(div, i) {
  div.textContent = `${myLibrary[i].info()}`;
  div.setAttribute('data-key', i);
  div.setAttribute(
    'style',
    `display: flex;
		padding: 8px;
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

function applyButtonStyle(btn) {
	btn.textContent = "Remove Book";
  btn.setAttribute(
    'style',
    `background-color: aquamarine;
		color: black;
		border-radius: 10px;
		font-size: 18px;
		border: 2px;
		border-style: solid;
		border-color: black;
		margin-top: 8px;
		padding: 4px 32px;
		align-self: start;
		margin-bottom: 2%;`
	);
}

function removeBook(div) {
	let ind = div.getAttribute("data-key");
	myLibrary.splice(ind,1);
	displayLibrary();
}
function openForm() {
  document.getElementById("myForm").style.display = "inline";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function reset(form) {
  form.title.value = '';
  form.author.value = '';
  form.page.value = '';
  form.read.value = '';
}

function removeBtnClick(e) {
	removeBook(e.target.parentElement);
}
