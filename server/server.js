const path = require('path');
const fs = require('fs');

const chirps = [
    {
        username: "Josh",
        message: "Node is fun! YAyyy"
    },
    {
        username: "Jake",
        message: "Node is fun! YAyyy"
    },
    {
        username: "Garrett",
        message: "Node is fun! YAyyy"
    },
    {
        username: "Micah",
        message: "Node is fun! YAyyy"
    },
    {
        username: "Colin",
        message: "Node is fun! YAyyy"
    }
];

// JS => JSON JSON.stringify()
fs.writeFile('chirps.json', JSON.stringify(chirps), function (err) {
    if (err) throw err;
    console.log('Saved!');
});

// JSON => JS JSON.parse()
fs.readFile('chirps.json', function (err, data) {
    if (err) throw err;
    console.log(JSON.parse(data));
});