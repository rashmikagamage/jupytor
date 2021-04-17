const fetch = require("node-fetch");


fetch('https://www.hackerrank.com/rest/contests/mockcompetition/leaderboard')
    .then(response => response.json())
    .then(data => assign(data));

function assign(data) {
    console.log(data)
}