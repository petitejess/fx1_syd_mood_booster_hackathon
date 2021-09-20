const happyMood = document.getElementById('happy_button');
const sadMood = document.getElementById('sad_button');
const excitedMood = document.getElementById('excited_button');
const tiredMood = document.getElementById('tired_button');
const scaredMood = document.getElementById('scared_button');
const anxiousMood = document.getElementById('anxious_button');
const confusedMood = document.getElementById('confused_button');
const boredMood = document.getElementById('bored_button');

happyMood.addEventListener("click", function(event) {
    let entry = getRandomInt(10)
    event.preventDefault()
    console.log(entry)
})

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
