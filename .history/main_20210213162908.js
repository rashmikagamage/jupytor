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
            "time": player.time_taken
        }
        ranks.push(obj)
    })

    console.log(ranks)
    convertToCSV(ranks)
}

var headers = {
    username: 'Username'.replace(/,/g, ''), // remove commas to avoid errors
    rank: "Rank",
    time: "Time",
};

function convertToCSV(items) {
    const replacer = (key, value) => value === null ? '' : "Null"
    const header = Object.keys(items[0])
    const csv = [
        header.join(','), // header row first
        ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    ].join('\r\n')

    console.log(csv)
}