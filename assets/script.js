var displayJoke = document.getElementById('displayJokes');
var dadJokes = document.getElementById('Dad Jokes');
getJoke();

async function getJoke() {
	var res = await fetch("https://api.icndb.com/jokes/random");
	var data = await res.json();
	
	displayJoke.innerHTML = data.value.joke;
}

dadJokes.addEventListener('click', getJoke);


