// const request = require("./request");
// const response = require("./response");

// we can destructure what we are gonna use from imported modules

const { send } = require("./request");
const { read } = require("./response");

//Another way to import modules using es6 method is,
//Two rules must follow while import modules as es6 method
//1:: In import statement must mention .mjs extention of module
//2:: If we use es6 method we must have to make extention of our file like .mjs

// import { send } from "./request.js";
// import { read } from "./response.js";

function makeRequest(url, data) {
  //   request.send(url, data);
  //   return response.read();

  //then we can use destructed functions directly like

  send(url, data);
  return read();
}

const responseData = makeRequest("https://www.google.com", "Hello World");
console.log(responseData);
