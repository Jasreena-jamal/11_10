//All names of books in top 10
var popular_book = [
  "Pride and Prejudice",
  "The Lord of the Rings",
  "The Book Thief",
  "Circe",
  "The Alchemist",
  "The Hobbit",
  "Pachinko",
  "The Martian",
  "The Hunger Games",
  "Little Women",
  "Harry Potter",
  "Game of thrones",
  "Assassin's Apprentice",
  "His Dark Materials",
  "Eragon",
  "The Princess Bride",
  "Words of Radiance",
  "The Mists of Avalon",
  "Prince of Thorns",
  "The Dragonriders of Pern",
  "Gone Girl",
  "The Silent Patient",
  "The Housemaid's Secret",
  "The Disappering Act",
  "American Spy",
  "The Couple Next Door",
  "Seven Years of Darkness",
  "The Broken Girls",
  "The Passengers",
  "Final Girls",
  "The Lightning Thief",
  "Twilight",
  "Divergent",
  "The Perks of being a Wallflower",
  "Looking for Alaska",
  "Ella Enchanted",
  "Bridge to Terabithia",
  "Number the Stars",
  "Coraline",
  "The Fault in our Stars",
  "War and Peace",
  "Jane Eyre",
  "Of Mice and Men",
  "The Secret Garden",
  "Emma",
  "The Art of War",
  "Catch 22",
  "The Book Thief",
  "The Kite Runner",
  "Homer"
];

// Function to randomly select and display a book name
function outputPopularBook(book, output) {
  var book_index = Math.floor(Math.random() * book.length);
  var b = "<p>" + book[book_index] + "</p>";
  output.innerHTML = b;
}

// Event listener for 'SURPRISE ME!' button click
window.onload = function() {
    // this Code  runs once the page is fully loaded
  document.getElementById("surprise_me_button").addEventListener("click", function() {
    // Get the div where we will display the book
    var outputDiv = document.getElementById("random_popular_book");
    // Call the function to display a random book
    outputPopularBook(popular_book, outputDiv);
  });
};
