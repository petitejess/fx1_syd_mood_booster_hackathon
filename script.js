// Buttons
const happyMood = document.getElementById('feelings');
const sadMood = document.getElementById('feelings_sad');
const excitedMood = document.getElementById('feelings_excited');
const tiredMood = document.getElementById('feelings_tired');
const scaredMood = document.getElementById('feelings_care');
const anxiousMood = document.getElementById('feelings_anxious');
const confusedMood = document.getElementById('feelings_confused');
const boredMood = document.getElementById('feelings_bored');

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
