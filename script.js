// Buttons
const happyMood = document.getElementById('happy_button');
const sadMood = document.getElementById('sad_button');
const excitedMood = document.getElementById('excited_button');
const tiredMood = document.getElementById('tired_button');
const scaredMood = document.getElementById('scared_button');
const anxiousMood = document.getElementById('anxious_button');
const confusedMood = document.getElementById('confused_button');
const boredMood = document.getElementById('bored_button');

function showQuote(quote) {
    // Display containers
    
    let quoteBody = document.getElementById("quote_body");
    quoteBody.innerHTML = `${quote.text}`;
}

async function getQuote(category) {
    try {
        let response = await fetch(`https://famous-quotes4.p.rapidapi.com/random?category=${category}&count=1`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "famous-quotes4.p.rapidapi.com",
                "x-rapidapi-key": "b4096686a4msh43536491990dcd7p1cbadcjsnf3dbd6782036"
            }
        });
        let quote = await response.json();
        console.log(quote[0]);
        showQuote(quote[0]);
    }
    catch(err) {
        console.log(err);
    }
}

happyMood.addEventListener("click", () => {
    getQuote("happiness");
});

sadMood.addEventListener("click", () => {
    getQuote("positive");
});

excitedMood.addEventListener("click", () => {
    getQuote("amazing");
});

tiredMood.addEventListener("click", () => {
    getQuote("strength");
});

scaredMood.addEventListener("click", () => {
    getQuote("courage");
});

anxiousMood.addEventListener("click", () => {
    getQuote("peace");
});

confusedMood.addEventListener("click", () => {
    getQuote("wisdom");
});

boredMood.addEventListener("click", () => {
    getQuote("funny");
});
