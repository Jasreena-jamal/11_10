const quotes = {
    fiction: [
        { quote: "Caring too much for objects can destroy you. Only—if you care for a thing enough, it takes on a life of its own, doesn’t it?", author: "Donna Tartt", book: "The Goldfinch" },
        { quote: "For you, a thousand times over.", author: "Khaled Hosseini", book: "The Kite Runner" },
        { quote: "The circus arrives without warning. No announcements precede it. It is simply there, when yesterday it was not.", author: "Erin Morgenstern", book: "The Night Circus" },
        { quote: "It was culture as class performance, literature fetishized for its ability to take educated people on false emotional journeys, so that they might learn the correct social attitudes to adopt in public.", author: "Sally Rooney", book: "Normal People" },
        { quote: "I wasn't aware that words could hold so much. I didn't know a sentence could be so full.", author: "Delia Owens", book: "Where the Crawdads Sing" }
    ],
    fantasy: [
        { quote: "Words are pale shadows of forgotten names. As names have power, words have power. Words can light fires in the minds of men. Words can wring tears from the hardest hearts.", author: "Patrick Rothfuss", book: "The Name of the Wind" },
        { quote: "When you play the game of thrones, you win or you die. There is no middle ground.", author: "George R.R. Martin", book: "A Song of Ice and Fire series" },
        { quote: "There’s always another secret.", author: "Brandon Sanderson", book: "Mistborn: The Final Empire" },
        { quote: "We may be small, and we may be young, but we will shake the world for our beliefs.", author: "Samantha Shannon", book: "The Priory of the Orange Tree" },
        { quote: "There is more in you of good than you know, child of the kindly West. Some courage and some wisdom, blended in measure.", author: "J.R.R. Tolkien", book: "The Hobbit" }
    ],
    mystery: [
        { quote: "There’s a difference between really loving someone and loving the idea of her.", author: "Gillian Flynn", book: "Gone Girl" },
        { quote: "What she had realized was that love was that moment when your heart was about to burst.", author: "Stieg Larsson", book: "The Girl with the Dragon Tattoo" },
        { quote: "We are all crazy, I believe, just in different ways.", author: "Alex Michaelides", book: "The Silent Patient" },
        { quote: "All conflict can be traced back to someone’s feelings getting hurt, don’t you think?", author: "Liane Moriarty", book: "Big Little Lies" },
        { quote: "If there's one thing I know, it's that the deranged are unpredictable.", author: "A.J. Finn", book: "The Woman in the Window" }
    ],
    ya: [
        { quote: "May the odds be ever in your favor.", author: "Suzanne Collins", book: "The Hunger Games" },
        { quote: "Some infinities are bigger than other infinities.", author: "John Green", book: "The Fault in Our Stars" },
        { quote: "Becoming fearless isn't the point. That's impossible. It's learning how to control your fear, and how to be free from it.", author: "Veronica Roth", book: "Divergent" },
        { quote: "The heart is an arrow. It demands aim to land true.", author: "Leigh Bardugo", book: "Six of Crows" },
        { quote: "What’s the point of having a voice if you’re gonna be silent in those moments you shouldn’t be?", author: "Angie Thomas", book: "The Hate U Give" }
    ],
    classics: [
        { quote: "He fell in October 1918, on a day that was so quiet and still on the whole front, that the army report confined itself to the single sentence: All quiet on the Western Front.", author: "Erich Maria Remarque", book: "All Quiet on the Western Front" },
        { quote: "We can know only that we know nothing. And that is the highest degree of human wisdom.", author: "Leo Tolstoy", book: "War and Peace" },
        { quote: "He was going to live forever, or die in the attempt.", author: "Joseph Heller", book: "Catch-22" },
        { quote: "They carried the sky. The whole atmosphere, they carried it, the humidity, the monsoons, the stink of fungus and decay, all of it, they carried gravity.", author: "Tim O'Brien", book: "The Things They Carried" },
        { quote: "The world breaks everyone, and afterward, some are strong at the broken places.", author: "Ernest Hemingway", book: "A Farewell to Arms" }
    ]
};

// Display Quotes
const quotesContainer = document.getElementById("quotes");

function displayQuotes(quotesData) {
    quotesContainer.innerHTML = "";
    for (const genre in quotesData) {
        quotesData[genre].forEach(quoteObj => {
            quotesContainer.innerHTML += `
                <div class="quote">
                    <p>"${quoteObj.quote}"</p>
                    <p><strong>${quoteObj.author}</strong><em> — ${quoteObj.book}</em></p>
                </div>
            `;
        });
    }
}

// Filter Quotes by Genre
function filterQuotes(genre) {
    const filteredQuotes = { [genre]: quotes[genre] };
    displayQuotes(filteredQuotes);
}

// Display All Quotes Initially
displayQuotes(quotes);
