// Array of quotes
const quotes = [
    {
        text: "The best games are easy to learn and impossible to master.",
        author: "Nolan Bushnell"
    },
    {
        text: "A game is worth a thousand words.",
        author: "Sid Meier"
    },
    {
        text: "Games are the most elevated form of investigation.",
        author: "Albert Einstein"
    },
    {
        text: "The magic happens when you find the fun.",
        author: "Game Developer Wisdom"
    },
    {
        text: "Every game is an opportunity to learn something new.",
        author: "Shigeru Miyamoto"
    },
    {
        text: "The purpose of a game is to be fun. Everything else is secondary.",
        author: "Ralph Baer"
    },
    {
        text: "Games are art, and art is about taking risks.",
        author: "Hideo Kojima"
    },
    {
        text: "A good game teaches you how to play it.",
        author: "Game Design Philosophy"
    }
];

// Function to display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex];
    
    const quoteTextElement = document.querySelector('.quote-text');
    const quoteAuthorElement = document.querySelector('.quote-author');
    
    if (quoteTextElement && quoteAuthorElement) {
        quoteTextElement.textContent = `"${selectedQuote.text}"`;
        quoteAuthorElement.textContent = `- ${selectedQuote.author}`;
    }
}

// Scroll indicator functionality
function handleScrollIndicator() {
    const scrollIndicator = document.getElementById('scrollIndicator');
    if (!scrollIndicator) return;
    
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const documentHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercentage = (scrollTop / documentHeight) * 100;
    
    if (scrollPercentage >= 90) {
        scrollIndicator.classList.add('hidden');
    } else {
        scrollIndicator.classList.remove('hidden');
    }
}

// Display a random quote when the page loads
document.addEventListener('DOMContentLoaded', displayRandomQuote);

// Add scroll event listener for the scroll indicator
window.addEventListener('scroll', handleScrollIndicator);
