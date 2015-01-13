function Shelf (name) {
	this.name = name;
	this.books = [];
	this.addBook = function(book) {
		this.books.push(book);
	}
	this.removeBook = function(book) {
		var remove = this.books.indexOf(book);
		if (remove > -1) this.books.splice(remove, 1);
	}
};

module.exports = Shelf;
