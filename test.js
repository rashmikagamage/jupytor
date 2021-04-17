const fetch = require("node-fetch");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;



fetch('https://www.hackerrank.com/contests/algothon2021/judge/submissions/26')
    .then(response => response.json())
    .then(data => console.log(data));

let ranks = [];