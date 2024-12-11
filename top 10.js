//All names of books in top 10
var popular_book = [
"Pride and Prejudice - Jane Austen",
"The Lord of the Rings - J.R.R. Tolkien",
"The Book Thief - Markus Zusak",
"Circe - Madeline Miller",
"The Alchemist - Paulo Coelho",
"The Hobbit - J.R.R. Tolkien",
"Pachinko - Min Jin Lee",
"The Martian - Andy Weir",
"The Hunger Games - Suzanne Collins",
"Little Women - Louisa May Alcott",
"Harry Potter - J.K. Rowling",
"Game of Thrones - George R.R. Martin",
"Assassin's Apprentice - Robin Hobb",
"His Dark Materials - Philip Pullman",
"Eragon - Christopher Paolini",
"The Princess Bride - William Goldman",
"Words of Radiance - Brandon Sanderson",
"The Mists of Avalon - Marion Zimmer Bradley",
"Prince of Thorns - Mark Lawrence",
"The Dragonriders of Pern - Anne McCaffrey",
"Gone Girl - Gillian Flynn",
"The Silent Patient - Alex Michaelides",
"The Housemaid's Secret - Freida McFadden",
"The Disappearing Act - Catherine Steadman",
"American Spy - Lauren Wilkinson",
"The Couple Next Door - Shari Lapena",
"Seven Years of Darkness - You-Jeong Jeong",
"The Broken Girls - Simone St. James",
"The Passengers - John Marrs",
"Final Girls - Riley Sager",
"The Lightning Thief - Rick Riordan",
"Twilight - Stephenie Meyer",
"Divergent - Veronica Roth",
"The Perks of Being a Wallflower - Stephen Chbosky",
"Looking for Alaska - John Green",
"Ella Enchanted - Gail Carson Levine",
"Bridge to Terabithia - Katherine Paterson",
"Number the Stars - Lois Lowry",
"Coraline - Neil Gaiman",
"The Fault in Our Stars - John Green",
"War and Peace - Leo Tolstoy",
"Jane Eyre - Charlotte Brontë",
"Of Mice and Men - John Steinbeck",
"The Secret Garden - Frances Hodgson Burnett",
"Emma - Jane Austen",
"The Art of War - Sun Tzu",
"Catch-22 - Joseph Heller",
"The Kite Runner - Khaled Hosseini",
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
