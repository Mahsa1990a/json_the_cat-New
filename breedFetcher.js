const request = require('request');

let args = process.argv.slice(2);
let breedName = args[0];

//const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    const data = JSON.parse(body);
    console.log(data[0].description);

    if (error) { //after changing url path
      console.log("it is an error", error);
    }

    if (data.length === 0) {
      console.log('The breed you entered was not found');
    } else if (response.statusCode !== 200) {
      console.log(`API call failed with statusCode: ${response.statusCode}`);
    }  
  
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('body:', body); // Print the HTML for the Google homepage.
    //console.log("typeof body is: ", typeof body) //string
    //Inorder to scan this data like JavaScript object:
  
    //console.log("data is: ", data); //[{ ... }]
    //console.log("data[0] is: ", data[0].name); // { ... }
    //console.log("type of data: ", typeof data); //object
    //console.log(data[0].description); //prtint cat description //node breedFetcher.js Chartreux
  });

//}

//module.exports = { fetchBreedDescription };


