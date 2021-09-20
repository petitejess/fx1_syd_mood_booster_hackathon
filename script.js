const happyMood = document.getElementById('feelings');
const sadMood = document.getElementById('feelings_sad');
const excitedMood = document.getElementById('feelings_excited');
const tiredMood = document.getElementById('feelings_tired');
const scaredMood = document.getElementById('feelings_care');
const anxiousMood = document.getElementById('feelings_anxious');
const confusedMood = document.getElementById('feelings_confused');
const boredMood = document.getElementById('feelings_bored');

function getQuote() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  
    fetch("https://type.fit/api/quotes", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }
  
  getQuote();