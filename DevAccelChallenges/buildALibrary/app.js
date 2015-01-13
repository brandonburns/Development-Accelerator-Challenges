var Library = require('./library');
var Shelf = require('./shelves');
var Book = require('./books');
var randomBook = require('./random');

var seattlePublic = new Library("Seattle Public Library");

seattlePublic.addShelf(fiction);
seattlePublic.addShelf(nonFiction);

var fiction = new Shelf("Fiction");

var nonFiction = new Shelf("Non-Fiction");

var jurassicPark = new Book("Michael Crichton", "Jurassic Park", "Fiction");
var huckleberryFinn = new Book("Mark Twain", "Huckleberry Finn", "Fiction");
var briefHistory = new Book("Stephen Hawking", "A Brief History of Time", "Non-Fiction");
var endersGame = new Book("Orson Scott Card", "Ender's Game", "Fiction");
var brainOnMusic = new Book("Daniel Levitin", "This is Your Brain on Music", "Non-fiction");
var americanSniper = new Book("Chris Kyle", "American Sniper", "Non-Fiction");

fiction.addBook(jurassicPark);
fiction.addBook(huckleberryFinn);
fiction.addBook(endersGame);

nonFiction.addBook(brainOnMusic);
nonFiction.addBook(briefHistory);
nonFiction.addBook(americanSniper);

console.log(fiction.books);
console.log(jurassicPark);
