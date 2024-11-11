const fs = require("fs");
let text = fs.readFileSync("read.txt","utf-8");
text = text.replace("Patel", "Sinha");
console.log(text);
console.log("Creating a new file");
fs.writeFileSync("hello.txt", text);
