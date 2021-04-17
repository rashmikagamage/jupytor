const fetch = require("node-fetch");


fetch('https://www.hackerrank.com/rest/contests/mockcompetition/leaderboard')
    .then(response => response.json())
    .then(data => assign(data));

let ranks = [];

function assign(data) {
    data.models.map((player) => {
        let obj = {
            "username": player.hacker,
            "rank": player.rank,
            "time": player.time_taken;
        }
        ranks.push(obj)
    })

    console.log(ranks)
}