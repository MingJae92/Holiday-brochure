const unirest = require('unirest');
const API_URL="https://airport-info.p.rapidapi.com/airport"
const API_KEY= '0c18d023f6msh9c30019dcc8027fp16dbf5jsn0579a78df469'

unirest.get(API_URL)
  .header("X-RapidAPI-Key", API_KEY)
  .end(function (result) {
    console.log( result.headers );
  });

  export  default unirest