
var quoteContainer = document.getElementById("quote");
var quote = ["Be yourself; everyone else is already taken" ,
    "A room without books is like a body without a soul" ,
    "You only live once, but if you do it right, once is enough",
    "Books are a uniquely portable magic"];

var author = [ "Oscar Wilde" , "Marcus Tullius Cicero" , "Mae West" , "Stephen King"];
// Function to display a random quote
function displayRandomQuote() {

    var randomIndex = Math.floor(Math.random() * quote.length); // Get a random index

    
    var authorContainer = document.getElementById("right");
    var result = "<p>" + quote[randomIndex] + "<br>-by " + author[randomIndex] +"</p>";
    authorContainer.innerHTML = result;
    
}


window.addEventListener("load",displayRandomQuote,false);




