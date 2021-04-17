const fetch = require("node-fetch");


fetch('https://www.hackerrank.com/rest/contests/mockcompetition/leaderboard')
    .then(response => response.json())
    .then(data => assign(data));

function assign(data) {
    data.models.map((player) => {
        console.log(player.hacke_id)
    })
}