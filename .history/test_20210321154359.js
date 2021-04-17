const fetch = require("node-fetch");
const createCsvWriter = require('csv-writer').createObjectCsvWriter;



fetch('https://www.hackerrank.com/rest/contests/algothon-5/leaderboard?offset=0&limit=100')
    .then(response => response.json())
    .then(console.log(data));

let ranks = [];

function assign(data) {

    console.log(data);
}