// console.log("first program");

// const data = require("fs");
// data.writeFileSync("abc.txt", "hello how are you");
// const readdata = data.readFileSync("abc.txt", "utf-8");
// console.log(readdata);

function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
module.exports = {
  sum,
  sub,
};
