var jokeContainer = document.getElementById('displayJokes');
var getJokeBtn = document.getElementById('Dad Jokes');
getJoke();

async function getJoke() {
	var res = await fetch("https://api.icndb.com/jokes/random");
	var data = await res.json();
	
	jokeContainer.innerHTML = data.value.joke;
}

getJokeBtn.addEventListener('click', getJoke);