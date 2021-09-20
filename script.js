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