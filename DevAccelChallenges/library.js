function Library () {
	this.shelves = [];
	this.addShelf = function(shelf) {
		this.shelves.push(shelf);
	}
	this.removeShelf = function (shelf) {
		var remove = this.shelves.indexOf(shelf);
		if (remove > -1) this.shelves.splice(remove, 1);
	}
};

function Shelf () {
	this.name = "";
	this.books = [];
	this.addBook = function(book) {
		this.books.push(book);
	}
	this.removeBook = function(book) {
		var remove = this.books.indexOf(book);
		if (remove > -1) this.books.splice(remove, 1);
	}
};

function Book (author, booktitle, category) {
	this.author = author;
	this.booktitle = booktitle;
	this.category = category;
};

var randomBook = function() {
	var shelf = seattlePublic.shelves[Math.floor(Math.random() * seattlePublic.shelves.length)];
	var index = shelf.books[Math.floor(Math.random() * shelf.books.length)];
		return index.booktitle + " " + " " + "By: " + index.author + " " + " " + "Category: " + 
		index.category;
};

var seattlePublic = new Library("Seattle Public Library");

var jurassicPark = new Book("Michael Crichton", "Jurassic Park", "Fiction");
var huckleberryFinn = new Book("Mark Twain", "Huckleberry Finn", "Fiction");
var briefHistory = new Book("Stephen Hawking", "A Brief History of Time", "Non-Fiction");
var endersGame = new Book("Orson Scott Card", "Ender's Game", "Fiction");
var brainOnMusic = new Book("Daniel Levitin", "This is Your Brain on Music", "Non-fiction");
var americanSniper = new Book("Chris Kyle", "American Sniper", "Non-Fiction");

var fiction = new Shelf();
fiction.name = "fiction";
fiction.books = [];

var nonFiction = new Shelf();
nonFiction.name = "non-fiction";
nonFiction.books = [];

seattlePublic.addShelf(fiction);
seattlePublic.addShelf(nonFiction);

fiction.addBook(jurassicPark);
fiction.addBook(huckleberryFinn);
fiction.addBook(endersGame);

nonFiction.addBook(brainOnMusic);
nonFiction.addBook(briefHistory);
nonFiction.addBook(americanSniper);

console.log(randomBook());
console.log(randomBook());
console.log(randomBook());

