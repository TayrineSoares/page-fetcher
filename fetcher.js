// Implement a node app called fetcher.js.

// It should take two command line arguments:
// a URL
// a local file path

// It should download the resource at the URL to the local path on your machine. Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// Asynchronous Operations
// There are two operations in this problem which will take an unknown amount of time:

// You need to make an http request and wait for the response.
// After the http request is complete, you need to take the data you receive and write it to a file in your local filesystem.
// ------------------------------------------------------------------------


const needle = require('needle');
const fs = require('fs'); // for writing files

// taking arguments from the command line
const args = process.argv;
const url = args[2];
const filePath = args[3];

// creating the connection using needle library
needle.get(url, (error, response) => {
  if (error) {
    console.error('Error:', error);
  } else {
    // assuming theres is no error, receives a response
    // then writes the file
    fs.writeFile('./index.html', response.body, err => {
      if (err) {
        console.error("Error writing file:", err);
      } else {
        // 1 character is equal to 1 byte, so file size is file length
        const fileSize = response.body.length;
        console.log(`Downloaded and saved ${fileSize} bytes to ${filePath}.`);
      }
    });
  }
});



