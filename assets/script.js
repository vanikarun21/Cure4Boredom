var dadJokeApiUrl = "https://icanhazdadjoke.com";
var inspQuotesApiUrl = "https://api.aakhilv.me/fun/facts";
var sunriseSunsetApiUrl ="https://api.sunrise-sunset.org/json";
 var randomJokesApiUrl ="https://api.humorapi.com/jokes/random?api-key=b00f3ac51d2e490a9253aecae0b40001";
// var randomJokesApiUrl ="https://api.humorapi.com/jokes/random";
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

let xmlhttp = new XMLHttpRequest ();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200){
        let data = JSON.parse(this.responseText);
        let copyright = data['copyright'];
        let date = data['date']
        let explanation = data['explanation']
        let hdurl = data['hdurl']
        let media_type = data['media_type']
        let title = data['title']
        let url = data['url']
        document.getElementById("wrapper-url").style.backgroundImage = `url("${url}")`;
        document.getElementById("wrapper-title").innerHTML = title;
        document.getElementById('wrapper-copyright').innerHTML = copyright
        document.getElementById('wrapper-explanation').innerHTML = explanation
        document.getElementById('wrapper-hdurl').href = hdurl
    }
}
var about = document.getElementById('about')
var aboutInfo = document.getElementById('aboutInfo')
let queryUrl = "https://api.nasa.gov/planetary/apod?";
let queryKey = "api_key=hgYbSzucAKEBVirb5pBcqp6I2boGGesw2D0GRhaZ";
let queryFull = queryUrl + queryKey;
xmlhttp.open('GET', queryFull, true);
xmlhttp.send();
about.addEventListener('click', function(){
    if(aboutInfo.style.display === "none") {
        aboutInfo.style.display = 'block'
    }else{
        aboutInfo.style.display = 'none'
    }
})

// RandomJoke
var displayRandom = document.getElementById('random');
var randomJokes = document.getElementById('random-jokes');

async function jokes() {
    var res = await fetch(randomJokesApiUrl, {
        headers: {

            Accept: "application/json"
        }
    });
    var random = await res.json();
    var textareaRandomJokes = random.joke;
    console.log(random);
    displayRandom.innerText = textareaRandomJokes;
}
randomJokes.addEventListener('click', jokes);
// double check ids, class, variable names, check api resources(refer to docs / may need api key)
// randomJokes();


// Fun Facts
var inspQuotes = document.getElementById('facts');
var quotes = document.getElementById('fun-facts');

async function Quotes() {
    var res = await fetch(inspQuotesApiUrl, {
        headers: {

            Accept: "application/json"
        }
    }); 
    var inspQuotesRes = await res.json();
    var textareainspQuotes = inspQuotesRes[0]
    console.log(inspQuotesRes);
    inspQuotes.innerText = textareainspQuotes;
}

quotes.addEventListener('click', Quotes);

