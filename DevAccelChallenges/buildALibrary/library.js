function Library (name) {
	this.shelves = [];
	this.addShelf = function(shelf) {
		this.shelves.push(shelf);
	}
	this.removeShelf = function (shelf) {
		var remove = this.shelves.indexOf(shelf);
		if (remove > -1) this.shelves.splice(remove, 1);
	}
};

module.exports = Library;
