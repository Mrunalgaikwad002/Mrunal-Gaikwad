const quotes = {
    direct: [
        { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr."},
        { text: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr."},
        { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",author: "Ralph Waldo Emerson"},

    ],
    indirect: [
        { text: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
        { text: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
        {text: "Albert Einstein suggested that life is like riding a bicycle, to keep your balance, you must keep moving.", author:" Albert Einstein" },
        {text: "Eleanor Roosevelt advised that no one can make you feel inferior without your consent.", author: "Eleanor Roosevelt"},
        {text: "Winston Churchill reminded us that success is not final, and failure is not fatal, it's the courage to continue that counts.", author: "Winston Churchill"},

    ],
    inspirational: [
        { text: "The best way to predict the future is to create it.", author: "Peter Drucker" },
        { text: "You do not find the happy life. You make it.", author: "Camilla E. Kimball" },
        {text: "You can't cross the sea merely by standing and staring at the water.", author:" Rabindranath Tagore"},
        {Text: "Dream is not that which you see while sleeping; it is something that does not let you sleep.",author: "A.P.J. Abdul Kalam"},
        {Text: "Arise, awake, and stop not until the goal is reached.",author: "Swami Vivekananda"},
    ],
    famous: [
        { text: "To be, or not to be, that is the question.", author: "William Shakespeare" },
        { text: "I think, therefore I am.", author: "René Descartes" },
        {text: "The only thing we have to fear is fear itself.", author: "Franklin D Roosevelt"},
        {text: "I think, therefore I am.", author:" René Descartes"},
        {text: "To be, or not to be, that is the question.",author: "William Shakespear"},
       
    ],
    cinematic: [
        { text: "May the Force be with you.", author: " Various (from Star Wars)" },
        { text: "Here's looking at you, kid.", author: "Humphrey Bogart (from Casablanca)" },
        {text: "To infinity and beyond!", author: "Tim Allen (from Toy Story)"},
        {text: "I'm the king of the world!", author: "Leonardo DiCaprio (from Titanic)"},
        {text: "There's no place like home.", author: "Judy Garland (from The Wizard of Oz)",},

       
    ],
    literary: [
        { text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.", author: "Jane Austen(from Pride and Prejudice)" },
        { text: "All animals are equal, but some animals are more equal than others.", author: "George Orwell (from Animal Farm)" },
        {text: "So we beat on, boats against the current, borne back ceaselessly into the past.", author: "F. Scott Fitzgerald (from The Great Gatsby)"},
        {text: "So we beat on, boats against the current, borne back ceaselessly into the past.", author:" F. Scott Fitzgerald (from The Great Gatsby)"},
        {text: "Not all those who wander are lost.",author: "J.R.R. Tolkien (from The Lord of the Rings)"},
       
    ],
    philosophical: [
        { text: "The only thing I know is that I know nothing.", author: "Socrates" },
        { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
        {text: "To find yourself, think for yourself.",author: "Socrates"},
        {text: "Life can only be understood backwards; but it must be lived forwards.",author: "Søren Kierkegaard"},
        {text: "The mind is everything. What you think, you become.", author: "Buddha"},
        
    ],
    humorous: [
        { text: "If you think you are too small to make a difference, try sleeping with a mosquito.",author: "Dalai Lama" },
        { text: "I can’t understand why people are frightened of new ideas. I’m frightened of the old ones.",author: "John Cage" },
        {text: "I’m not arguing with you; I’m simply explaining why you’re wrong.",author: "Anonymous"},
        {text: "You know you’re getting old when the candles cost more than the cake.",author: "Bob Hope"},
        {text: "I always wanted to be somebody, but now I realize I should have been more specific.",author: "Lily Tomlin"},
       
    ],
    historical: [
        { text: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
        { text: "In the end, it's not the years in your life that count. It's the life in your years.", author: "Abraham Lincoln" },
        {text: "I never make mistakes. I thought I did once, but I was wrong.",author: "Charles M. Schulz"},
        {text: "In three words I can sum up everything I've learned about life: it goes on.",author:" Robert Frost"},
        {text: "The trouble with the rat race is that even if you win, you’re still a rat.",author: "Lily Tomlin"},
    
       
    ],
    religious: [
        { text: "Faith is taking the first step even when you don’t see the whole staircase.", author: "Martin Luther King Jr." },
        { text: "God does not play dice with the universe.", author: "Albert Einstein" },
        {text: "To err is human; to forgive, divine.", author: "Alexander Pope"},
        {text: "Let all that you do be done in love.", author: "The Bible (1 Corinthians 16:14)"},
        {text: "Peace comes from within. Do not seek it without.",author: "Buddha"},
        
    ]
};

const colors = {
    direct: "#ffebcd", 
    indirect: "#dcdcdc", 
    inspirational: "#f0e68c", 
    famous: "#e0ffff", 
    cinematic: "#f5f5dc", 
    literary: "#d3d3d3", 
    philosophical: "#ffe4e1", 
    humorous: "#f5deb3", 
    historical: "#dcdcdc", 
    religious: "#fafad2"  
};

const fonts = {
    direct: "Arial, sans-serif",
    indirect: "Courier New, monospace",
    inspirational: "Georgia, serif",
    famous: "Times New Roman, serif",
    cinematic: "Verdana, sans-serif",
    literary: "Tahoma, sans-serif",
    philosophical: "Trebuchet MS, sans-serif",
    humorous: "Impact, sans-serif",
    historical: "Palatino, serif",
    religious: "Garamond, serif"
};

let currentType = 'direct';
let favoriteQuotes = [];
let scrambleQuote = '';
let scrambleWords = [];
let timer;
let hintUsed = false;

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const quoteBox = document.getElementById('quote-box');
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
const quoteTypeSelect = document.getElementById('quote-type');
const favoritesButton = document.getElementById('favorites');
const feedbackButton = document.getElementById('feedback');
const scrambleButton = document.getElementById('scramble');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesSection = document.getElementById('favorites-section');
const feedbackSection = document.getElementById('feedback-section');
const scrambleSection = document.getElementById('scramble-section');
const feedbackText = document.getElementById('feedback-text');
const submitFeedbackButton = document.getElementById('submit-feedback');
const feedbackMessage = document.getElementById('feedback-message');
const scrambledQuoteElement = document.getElementById('scrambled-quote');
const scrambleInput = document.getElementById('scramble-input');
const submitScrambleButton = document.getElementById('submit-scramble');
const scrambleResult = document.getElementById('scramble-result');
const timerElement = document.getElementById('timer');
const hintButton = document.getElementById('hint-btn');
const hintMessage = document.getElementById('hint-message');
const body = document.querySelector('body');

function getRandomQuote(type) {
    const quotesArray = quotes[type];
    const randomIndex = Math.floor(Math.random() * quotesArray.length);
    return quotesArray[randomIndex];
}

function getCurrentColor() {
    return colors[currentType];
}

function displayQuote() {
    const quote = getRandomQuote(currentType);
    quoteElement.textContent = quote.text;
    authorElement.textContent = `— ${quote.author}`;
    quoteElement.style.fontFamily = fonts[currentType];
    quoteBox.style.backgroundColor = getCurrentColor();
    quoteBox.classList.add('fade-in');
    setTimeout(() => {
        quoteBox.classList.remove('fade-in');
        quoteBox.classList.add('active');
    }, 500);
}

function updateBackground() {
    body.style.backgroundColor = getCurrentColor();
}

function playClickSound() {
    const buttonSound = document.getElementById('button-sound');
    buttonSound.play();
}

function toggleFavorite() {
    const quoteText = quoteElement.textContent;
    const quoteAuthor = authorElement.textContent.substring(2);
    if (favoriteQuotes.some(q => q.text === quoteText)) {
        favoriteQuotes = favoriteQuotes.filter(q => q.text !== quoteText);
        favoriteBtn.classList.remove('active');
        updateFavoritesSection();
    } else {
        favoriteQuotes.push({ text: quoteText, author: quoteAuthor });
        favoriteBtn.classList.add('active');
        updateFavoritesSection();
    }
}

function updateFavoritesSection() {
    const favoritesList = document.getElementById('favorites-list');
    favoritesList.innerHTML = '';
    favoriteQuotes.forEach(quote => {
        const listItem = document.createElement('li');
        listItem.textContent = `"${quote.text}" — ${quote.author}`;
        favoritesList.appendChild(listItem);
    });
    favoritesSection.classList.remove('hidden');
}

function showFeedback() {
    feedbackSection.classList.remove('hidden');
    scrambleSection.classList.add('hidden');
    favoritesSection.classList.add('hidden');
}

function submitFeedback() {
    feedbackMessage.textContent = 'Thank you for your feedback!';
    feedbackText.value = '';
    feedbackSection.classList.add('hidden');
}

function showScrambleGame() {
    scrambleSection.classList.remove('hidden');
    feedbackSection.classList.add('hidden');
    favoritesSection.classList.add('hidden');
    const quote = getRandomQuote(currentType);
    scrambleQuote = quote.text;
    scrambleWords = scrambleQuote.split(' ').sort(() => Math.random() - 0.5);
    scrambledQuoteElement.textContent = scrambleWords.join(' ');
    resetTimer();
}

function checkScrambleAnswer() {
    const userAnswer = scrambleInput.value.trim();
    if (userAnswer === scrambleQuote) {
        scrambleResult.textContent = 'Correct! Well done.';
        clearInterval(timer);
    } else {
        scrambleResult.textContent = 'Oops! Try again.';
    }
}

function resetTimer() {
    let time = 60; // 60 seconds timer
    hintUsed = false;
    timerElement.textContent = `Time left: ${time}s`;
    timer = setInterval(() => {
        time--;
        timerElement.textContent = `Time left: ${time}s`;
        if (time <= 0) {
            clearInterval(timer);
            scrambleResult.textContent = 'Time is up! The correct quote was: ' + scrambleQuote;
        }
    }, 1000);
}

function giveHint() {
    if (hintUsed) {
        hintMessage.textContent = 'Hint already used!';
        return;
    }
    hintUsed = true;
    const hint = scrambleQuote.split(' ').slice(0, 2).join(' ') + '...'; // Show first two words as hint
    hintMessage.textContent = `Hint: ${hint}`;
}

function setupEventListeners() {
    nextButton.addEventListener('click', () => {
        playClickSound();
        displayQuote();
        updateBackground();
    });

    prevButton.addEventListener('click', () => {
        playClickSound();
        displayQuote();
        updateBackground();
    });

    favoriteBtn.addEventListener('click', () => {
        playClickSound();
        toggleFavorite();
    });

    favoritesButton.addEventListener('click', () => {
        playClickSound();
        favoritesSection.classList.remove('hidden');
        feedbackSection.classList.add('hidden');
        scrambleSection.classList.add('hidden');
    });

    feedbackButton.addEventListener('click', () => {
        playClickSound();
        showFeedback();
    });

    scrambleButton.addEventListener('click', () => {
        playClickSound();
        showScrambleGame();
    });

    submitFeedbackButton.addEventListener('click', () => {
        playClickSound();
        submitFeedback();
    });

    submitScrambleButton.addEventListener('click', () => {
        playClickSound();
        checkScrambleAnswer();
    });

    hintButton.addEventListener('click', () => {
        playClickSound();
        giveHint();
    });

    quoteTypeSelect.addEventListener('change', (e) => {
        currentType = e.target.value;
        displayQuote();
        updateBackground();
    });

    displayQuote();
    updateBackground();
}

setupEventListeners();















