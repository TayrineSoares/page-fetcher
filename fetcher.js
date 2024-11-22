// Implement a node app called fetcher.js.

// It should take two command line arguments:
// a URL
// a local file path

// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
// ------------------------------------------------------------------------

const needle = require('needle');
const fs = require('fs');

const args = process.argv;
const url = args[2];
const filePath = args[3];

needle.get(url, (error, response) => {

  if (error) {
    console.error('Error:', error);
    
  } else {
    fs.writeFile('./index.html', response.body, err => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        const fileSize = response.body.length;
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}.`);
      }
    });
  }
});



