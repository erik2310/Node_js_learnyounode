/*
    Write a program that uses a single asynchronous filesystem operation to
    read a file and print the number of newlines it contains to the console
    (stdout), similar to running cat file | wc -l.

    The full path to the file to read will be provided as the first
    command-line argument.
*/

let fs = require("fs");

fs.readFile(process.argv[2], function (err, data) {

    let bufferToString = data.toString();

    let bufferToArray = bufferToString.split("\n");

    let countItems = bufferToArray.length - 1;

    console.log(countItems);

});

