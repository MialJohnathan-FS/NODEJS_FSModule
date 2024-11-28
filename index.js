const fs = require("node:fs")


console.log('First');


const fileContents = fs.readFileSync("./file.txt", "utf8");
console.log(fileContents);


console.log('Second');

fs.readFile("./file.txt", "utf8", (error, data) => {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
    }
});

console.log('Third');

fs.writeFileSync('./greet.txt', 'Hello World! ');

fs.writeFile('./greet.txt', 'Hello, this is a new text doc ', { flag: "a" }, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File Written!');
    }
});