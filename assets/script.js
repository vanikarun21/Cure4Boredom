
//DadJoke
var displayDad = document.getElementById('displayJokes');
var dadJokes = document.getElementById('Dad Jokes');
dadJoke();


async function dadJoke() {
	var res = await fetch("https://api.icndb.com/jokes/random");
	var data = await res.json(); //convert to json
	console.log(data)
	
	displayDad.innerText = data.value.joke;
}

dadJokes.addEventListener('click', dadJoke);


//RandomJoke
var displayRandom = document.getElementById('random');
var randomJoke = document.getElementById('Random Jokes');
randomJoke();


async function randomJoke() {
	var res = await fetch("https://api.icndb.com/jokes/random");
	var data = await res.json();
	
	displayRandom.innerText = data.value.joke;
}

randomJoke.addEventListener('click', randomJoke);

//Inspirational Quotes
var inspQuotes = document.getElementById('quotes');
var quotes = document.getElementById('Inspirational quotes');
Quotes();


async function Quotes() {
	var res = await fetch("https://api.icndb.com/jokes/random");
	var data = await res.json();
	
	inspQuotes.innerText = data.value.joke;
}

quotes.addEventListener('click', Quotes);

//Sunrise Sunset
var sunRise = document.getElementById('quotes');
var sunQuotes = document.getElementById('Inspirational quotes');
sunRiseQuotes();


async function sunRiseQuotes() {
	var res = await fetch("https://api.icndb.com/jokes/random");
	var data = await res.json();
	
	sunRise.innerText = data.value.joke;
}

sunQuotes.addEventListener('click', sunRiseQuotes);











