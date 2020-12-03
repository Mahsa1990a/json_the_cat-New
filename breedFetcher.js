const request = require('request');

request('https://api.thecatapi.com/v1/breeds/search?q=sib', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log("typeof body is: ", typeof body) //string

  //Inorder to scan this data like JavaScript object:
  const data = JSON.parse(body);
  console.log("data is: ", data); //[{ ... }]
  console.log("data[0] is: ", data[0]); // { ... }
  console.log("type of data: ", typeof data); //object
});

