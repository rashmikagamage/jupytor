const fetch = require("node-fetch");



fetch('https://www.hackerrank.com/rest/contests/mockcompetition/leaderboard')
    .then(response => response.json())
    .then(data => assign(data));

let ranks = [];

function assign(data) {
    data.models.map((player) => {
        console.log(player);
        let obj = {
            "score": player.score,
            "username": player.hacker.toLowerCase(),
            "time": player.time_taken,
        }
        ranks.push(obj)
    })
    rankTeams(ranks);
    convertToCSV(ranks)
}

function rankTeams(ranks) {
    let shrodingers_team = {
            "name": "s=shrodingers_team",
            "score": 0,
            "time": 0
        },
        Nasty_Owls = {
            "name": "Nasty_Owls",
            "score": 0,
            "time": 0
        },
        teamnotfound169 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        hexclan7777 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        Team_Randoms = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        algochamps = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        qubitworld01 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        codebusters_sli1 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        bitlegion123 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        logenx24 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        team404_me = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        team_sparks = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        datapirates = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        algothonpirates = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        simruncode = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        phoenix2O_mx5 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        trojan_interface = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        runtimeterror_a1 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        musketeersRVD = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        },
        wedontbyte405 = {
            "name": "teamnotfound169",
            "score": 0,
            "time": 0
        };

    ranks.map((p) => {
        let teamsObj = {
            name: "",
            rank: 0,
            score: 0,
            time: 0.0
        }
        if (p.username === "shyam_r1") {
            console.log("sasaassasa")
            shrodingers_team.score = shrodingers_team.score + p.score
            shrodingers_team.time = shrodingers_team.time + p.time
        } else if (p.username === "It18134704") {
            shrodingers_team.score = shrodingers_team.score + p.score
            shrodingers_team.time = shrodingers_team.time + p.time
        }

        console.log(shrodingers_team.score)
    })

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