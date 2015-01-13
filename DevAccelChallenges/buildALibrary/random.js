var randomBook = function(library) {
  var shelf = library.shelves[Math.floor(Math.random() * library.shelves.length)];
  console.log(shelf.books);
  var index = shelf.books[Math.floor(Math.random() * shelf.books.length)];
  return index.booktitle + " " + " " + "By: " + index.author + " " + " " + "Category: " + index.category;
};

module.exports = randomBook;
