const fetch = require("node-fetch");


fetch('https://www.hackerrank.com/rest/contests/mockcompetition/leaderboard')
    .then(response => response.json())
    .then(data => assign(data));

let ranks = [];

function assign(data) {
    data.models.map((player) => {
        let obj = {
            "Rank": player.rank,
            "Username": player.hacker,
            "Time": player.time_taken
        }
        ranks.push(obj)
    })

    console.log(ranks)
    convertToCSV(ranks)
}


function convertToCSV(items) {
    const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here
    const header = Object.keys(items[0])
    const csv = [
        header.join(','), // header row first
        ...items.map(row => header.map(fieldName => JSON.stringify(row[fieldName], replacer)).join(','))
    ].join('\r\n')

    console.log(csv)
}