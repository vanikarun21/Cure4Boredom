//
//DadJoke
var displayDad = document.getElementById('displayJokes');
var dadJokes = document.getElementById('Dad Jokes');
dadJoke();
dadJokes.addEventListener('click', dadJoke);

async function dadJoke() {
	var res = await fetch("");
	var data = await res.json(); //convert to j
	//console.log(data)
	if (res.ok){
		displayDad.innerText = data.value.joke;

	}
}



//RandomJoke
var displayRandom = document.getElementById('random');
var randomJoke = document.getElementById('Random Jokes');
randomJoke();
randomJoke.addEventListener('click', randomJoke);

async function randomJoke() {
	var res = await fetch("");
	var data = await res.json();
	//console.log(data)

	if(res.ok){

		displayRandom.innerText = data.value.joke;
	}

}



//Inspirational Quotes
var inspQuotes = document.getElementById('quotes');
var quotes = document.getElementById('Inspirational quotes');
Quotes();
quotes.addEventListener('click', Quotes);

async function Quotes() {
	var res = await fetch("");
	var data = await res.json();
	
	if (res.ok){
		inspQuotes.innerText = data.value.joke;
	}

}





//Sunrise Sunset
var sunRise = document.getElementById('quotes');
var sunQuotes = document.getElementById('Inspirational quotes');
sunRiseQuotes();
sunQuotes.addEventListener('click', sunRiseQuotes);

async function sunRiseQuotes() {
	var res = await fetch("");
	var data = await res.json();

	if (res.ok){
	
	sunRise.innerText = data.value.joke;
	}

}











