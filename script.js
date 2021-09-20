// Buttons
const happyMood = document.getElementById('happy_button');
const sadMood = document.getElementById('sad_button');
const excitedMood = document.getElementById('excited_button');
const tiredMood = document.getElementById('tired_button');
const scaredMood = document.getElementById('scared_button');
const anxiousMood = document.getElementById('anxious_button');
const confusedMood = document.getElementById('confused_button');
const boredMood = document.getElementById('bored_button');

// Display containers


function showQuote(quotes, n) {
  console.log(quotes[n].text);
  if (quotes[n].author) {
    console.log(`- ${quotes[n].author}`);
  }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

async function getQuote(minRange) {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    // Get random index number for quote
    let n = getRandomInt(minRange + 99);
    try {
      let response = await fetch("https://type.fit/api/quotes", requestOptions);
      let quotes = await response.json();
      showQuote(quotes, n);
    }
    catch(err) {
      console.log(err);
    }
}

happyMood.addEventListener("click", () => {
  getQuote(0);
});

sadMood.addEventListener("click", () => {
  getQuote(100);
});

excitedMood.addEventListener("click", () => {
  getQuote(200);
});

tiredMood.addEventListener("click", () => {
  getQuote(300);
});

scaredMood.addEventListener("click", () => {
  getQuote(400);
});

anxiousMood.addEventListener("click", () => {
  getQuote(500);
});

confusedMood.addEventListener("click", () => {
  getQuote(600);
});

boredMood.addEventListener("click", () => {
  getQuote(700);
});
