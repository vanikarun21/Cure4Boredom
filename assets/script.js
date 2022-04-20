var dadJokeApiUrl = "https://icanhazdadjoke.com";
var inspQuotesApiUrl = "https://api.aakhilv.me";
var sunriseSunsetApiUrl ="https://api.sunrise-sunset.org/json";
var randomJokesApiUrl ="https://api.humorapi.com/jokes/random";

// DadJoke
var displayDad = document.getElementById('displayJokes');
var dadJokes = document.getElementById('dad-jokes');

async function dadJoke() {
    var res = await fetch(dadJokeApiUrl, {
        headers: {
            Accept: "application/json"
        }
    });
    var joke = await res.json();
    var textareaJoke = joke.joke;
    console.log(joke);
    displayDad.innerText = textareaJoke;
}

dadJokes.addEventListener('click', dadJoke);

//RandomJoke
var displayRandom = document.getElementById('random');
var randomJoke = document.getElementById('Random Jokes');
randomJoke();
async function randomJoke() {
    var res = await fetch("");
    var data = await res.json();
    displayRandom.innerText = data.value.joke;
}
randomJoke.addEventListener('click', randomJoke);
//Inspirational Quotes
var inspQuotes = document.getElementById('quotes');
var quotes = document.getElementById('Inspirational quotes');
Quotes();
async function Quotes() {
    var res = await fetch("");
    var data = await res.json();
    inspQuotes.innerText = data.value.joke;
}
quotes.addEventListener('click', Quotes);
//Sunrise Sunset
var sunRise = document.getElementById('quotes');
var sunQuotes = document.getElementById('Inspirational quotes');
sunRiseQuotes();
async function sunRiseQuotes() {
    var res = await fetch("");
    var data = await res.json();
    sunRise.innerText = data.value.joke;
}
sunQuotes.addEventListener('click', sunRiseQuotes);
