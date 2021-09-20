function getData() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

    getQuote = {
      fetch("https://quotes.rest/qod/categories", requestOptions)
        .then(response => response.JSON())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
}

getData()