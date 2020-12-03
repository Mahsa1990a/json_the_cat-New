const request = require('request');

//let args = process.argv.slice(2);
//let breedName = args[0];

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    //console.log('error:', error); // Print the error if one occurred
    const data = JSON.parse(body);
    //console.log(data[0].description);

    if (error) { //there is error: so error, null
      callback(error, null);
    } else if (data[0]) { //there is not error so: null, desc of body
      callback(null, data[0].description);
    }

    if (data.length === 0) {
      console.log('The breed you entered was not found');
    } else if (response.statusCode !== 200) {
      console.log(`API call failed with statusCode: ${response.statusCode}`);
    }
  
  });

};
module.exports = { fetchBreedDescription };


