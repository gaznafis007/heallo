// PROBLEM-1
const input = { a: 1, b: 2, c: 3 };
// const output = Object.entries(input).map(([key, value]) => ({ [key]: value }));
function output(input) {
  const output = Object.entries(input).map(([key, value]) => ({
    [key]: value,
  }));
  return output;
}
// console.log(output(input));

// PROBLEM-2
const input2 = [{ a: 1 }, { b: 2 }, { c: 3 }];
const output2 = input2.reduce((acc, obj) => Object.assign(acc, obj), {});
console.log(output2);

// PROBLEM-3 HACKER RANK QUESTION
("use strict");

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'handshake' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */

function handshake(n) {
  // Write your code here
  return (n * (n - 1)) / 2;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const t = parseInt(readLine().trim(), 10);

  for (let tItr = 0; tItr < t; tItr++) {
    const n = parseInt(readLine().trim(), 10);

    const result = handshake(n);

    ws.write(result + "\n");
  }

  ws.end();
}
