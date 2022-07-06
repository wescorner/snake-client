const { connect } = require("./client");
const { input, setupInput } = require("./input");

console.log("Connecting...");
connect();

setupInput();
