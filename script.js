const happyMood = document.getElementById('feelings');
const sadMood = document.getElementById('feelings_sad');
const excitedMood = document.getElementById('feelings_excited');
const tiredMood = document.getElementById('feelings_tired');
const scaredMood = document.getElementById('feelings_care');
const anxiousMood = document.getElementById('feelings_anxious');
const confusedMood = document.getElementById('feelings_confused');
const boredMood = document.getElementById('feelings_bored');

function showQuote(quotes) {
  console.log(quotes);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function getQuote() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    try {
      let response = await fetch("https://type.fit/api/quotes", requestOptions);
      let quotes = await response.json();
      showQuote(quotes);
    }
    catch(err) {
      console.log(err);
    }
}

happyMood.addEventListener("click", () => {
  getQuote();
});
