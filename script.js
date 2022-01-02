// Buttons
const happyMood = document.getElementById('happy_button');
const sadMood = document.getElementById('sad_button');
const excitedMood = document.getElementById('excited_button');
const tiredMood = document.getElementById('tired_button');
const scaredMood = document.getElementById('scared_button');
const anxiousMood = document.getElementById('anxious_button');
const confusedMood = document.getElementById('confused_button');
const boredMood = document.getElementById('bored_button');

function showQuote(quote, bgColor) {
  // The display containers
  const homepageElements = document.querySelectorAll(".homepage-element");
  const quotepageElements = document.querySelectorAll(".quotepage-element");

  // Try Again button
  const tryAgain = document.getElementById('again');

  function swapElements(show) {
    // Hide homepage elements
    for(let i = 0; i < homepageElements.length; i++) {
      homepageElements[i].style.display = show === "show home" ? "flex" : "none";
    }

    // Show quote elements
    for(let i = 0; i < quotepageElements.length; i++) {
      quotepageElements[i].style.display = show === "show quote" ? "block" : "none";
    }
    tryAgain.style.display = show === "show quote" ? "block" : "none";
  }
  
  // Try Again button to display homepage elements back
  tryAgain.addEventListener("click", () => {
    swapElements("show home");
  })

  swapElements("show quote");
  let quoteBody = document.getElementById("quote_body");
  let changingBg = document.getElementById("changing-bg");
  quoteBody.innerHTML = `${quote.text}`;
  changingBg.style.backgroundColor = bgColor;
}

async function getQuote(category, bgColor) {
  try {
    let response = await fetch(`https://famous-quotes4.p.rapidapi.com/random?category=${category}&count=1`, {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
        "x-rapidapi-key": "b4096686a4msh43536491990dcd7p1cbadcjsnf3dbd6782036"
      }
    });
    let quote = await response.json();

    // To check the data in console
    console.log(quote[0]);

    showQuote(quote[0], bgColor);

    // // Use code below, comment code above when not checking the API data (so we don't exceed allowed API request quota)
    // showQuote({text: "A quote a day keeps the depression away!"}, bgColor);
  }
  catch(err) {
    console.log(err);
  }
}

happyMood.addEventListener("click", () => {
  getQuote("happiness", "#ff69b4");
});

sadMood.addEventListener("click", () => {
  getQuote("positive", "#8bc6ec");
});

excitedMood.addEventListener("click", () => {
  getQuote("amazing", "#66dc9c");
});

tiredMood.addEventListener("click", () => {
  getQuote("strength", "#d58ef3");
});

scaredMood.addEventListener("click", () => {
  getQuote("courage", "#ffbbec");
});

anxiousMood.addEventListener("click", () => {
  getQuote("peace", "#00dbde");
});

confusedMood.addEventListener("click", () => {
  getQuote("wisdom", "#0093e9");
});

boredMood.addEventListener("click", () => {
  getQuote("funny", "#d8bfd8");
});
