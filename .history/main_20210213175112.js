const fetch = require("node-fetch");



fetch('https://www.hackerrank.com/rest/contests/mockcompetition/leaderboard')
    .then(response => response.json())
    .then(data => assign(data));

let ranks = [];

function assign(data) {
    data.models.map((player) => {
        console.log(player);
        let obj = {
            "Rank": player.rank,
            "Username": player.hacker,
            "Time": player.time_taken
        }
        ranks.push(obj)
    })
    rankTeams(ranks);
    console.log(ranks)
    convertToCSV(ranks)
}

function rankTeams(ranks) {
    let shrodingers_team, Nasty_Owls, teamnotfound169, hexclan7777, Team_Randoms, algochamps, qubitworld01, codebusters_sli1, bitlegion123, logenx24, team404_me, team_sparks, datapirates, algothonpirates, simruncode, phoenix2O_mx5, trojan_interface, runtimeterror_a1, musketeersRVD,
        wedontbyte405

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