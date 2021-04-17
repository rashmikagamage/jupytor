const fetch = require("node-fetch");



fetch('https://www.hackerrank.com/rest/contests/algothon-5/leaderboard?offset=0&limit=100')
    .then(response => response.json())
    .then(data => assign(data));

let ranks = [];

function assign(data) {
    data.models.map((player) => {
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
    let arrayTeams = [shrodingers_team = {
            "name": "sshrodingers_team",
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
            "name": "hexclan7777",
            "score": 0,
            "time": 0
        },
        Team_Randoms = {
            "name": "Team_Randoms",
            "score": 0,
            "time": 0
        },
        algochamps = {
            "name": "algochamps",
            "score": 0,
            "time": 0
        },
        qubitworld01 = {
            "name": "qubitworld01",
            "score": 0,
            "time": 0
        },
        codebusters_sli1 = {
            "name": "codebusters_sli1",
            "score": 0,
            "time": 0
        },
        bitlegion123 = {
            "name": "bitlegion123",
            "score": 0,
            "time": 0
        },
        logenx24 = {
            "name": "logenx24",
            "score": 0,
            "time": 0
        },
        team404_me = {
            "name": "team404_me",
            "score": 0,
            "time": 0
        },
        team_sparks = {
            "name": "team_sparks",
            "score": 0,
            "time": 0
        },
        datapirates = {
            "name": "datapirates",
            "score": 0,
            "time": 0
        },
        algothonpirates = {
            "name": "algothonpirates",
            "score": 0,
            "time": 0
        },
        simruncode = {
            "name": "simruncode",
            "score": 0,
            "time": 0
        },
        phoenix2O_mx5 = {
            "name": "phoenix2O_mx5",
            "score": 0,
            "time": 0
        },
        trojan_interface = {
            "name": "trojan_interface",
            "score": 0,
            "time": 0
        },
        runtimeterror_a1 = {
            "name": "runtimeterror_a1",
            "score": 0,
            "time": 0
        },
        musketeersRVD = {
            "name": "musketeersRVD",
            "score": 0,
            "time": 0
        },
        wedontbyte405 = {
            "name": "wedontbyte405",
            "score": 0,
            "time": 0
        }
    ];

    let playerTeams = [];

    ranks.map((p) => {

        //Shrodingers
        if (p.username === "it18067866") {
            shrodingers_team.score = shrodingers_team.score + p.score
            shrodingers_team.time = shrodingers_team.time + p.time
        } else if (p.username === "it18134704") {
            shrodingers_team.score = shrodingers_team.score + p.score
            shrodingers_team.time = shrodingers_team.time + p.time
        } else if (p.username === "it18082234") {
            shrodingers_team.score = shrodingers_team.score + p.score
            shrodingers_team.time = shrodingers_team.time + p.time
        }
        //NastyOwls
        else if (p.username === "it20633790") {
            Nasty_Owls.score = Nasty_Owls.score + p.score
            Nasty_Owls.time = Nasty_Owls.time + p.time
        } else if (p.username === "it19051130") {
            Nasty_Owls.score = Nasty_Owls.score + p.score
            Nasty_Owls.time = Nasty_Owls.time + p.time
        } else if (p.username === "it20281632") {
            Nasty_Owls.score = Nasty_Owls.score + p.score
            Nasty_Owls.time = Nasty_Owls.time + p.time
        }
        //teamnotfound169
        else if (p.username === "it17160162") {
            teamnotfound169.score = teamnotfound169.score + p.score
            teamnotfound169.time = teamnotfound169.time + p.time
        } else if (p.username === "it17147392") {
            teamnotfound169.score = teamnotfound169.score + p.score
            teamnotfound169.time = teamnotfound169.time + p.time
        } else if (p.username === "it18149722") {
            teamnotfound169.score = teamnotfound169.score + p.score
            teamnotfound169.time = teamnotfound169.time + p.time
        }
        //hexclan7777
        else if (p.username === "it19155944") {
            hexclan7777.score = hexclan7777.score + p.score
            hexclan7777.time = hexclan7777.time + p.time
        } else if (p.username === "it19170244") {
            hexclan7777.score = hexclan7777.score + p.score
            hexclan7777.time = hexclan7777.time + p.time
        } else if (p.username === "it19140544") {
            hexclan7777.score = hexclan7777.score + p.score
            hexclan7777.time = hexclan7777.time + p.time
        }

        //team_randoms
        else if (p.username === "it19188928") {
            Team_Randoms.score = Team_Randoms.score + p.score
            Team_Randoms.time = Team_Randoms.time + p.time
        } else if (p.username === "it19001708") {
            Team_Randoms.score = Team_Randoms.score + p.score
            Team_Randoms.time = Team_Randoms.time + p.time
        } else if (p.username === "it19960296") {
            Team_Randoms.score = Team_Randoms.score + p.score
            Team_Randoms.time = Team_Randoms.time + p.time
        }

        //algochamps
        else if (p.username === "it19131184") {
            algochamps.score = algochamps.score + p.score
            algochamps.time = algochamps.time + p.time
        } else if (p.username === "it19139036") {
            algochamps.score = algochamps.score + p.score
            algochamps.time = algochamps.time + p.time
        } else if (p.username === "it19104218") {
            algochamps.score = algochamps.score + p.score
            algochamps.time = algochamps.time + p.time
        }
        //qubitworld01
        else if (p.username === "it18059564") {
            qubitworld01.score = qubitworld01.score + p.score
            qubitworld01.time = qubitworld01.time + p.time
        } else if (p.username === "it18165180") {
            qubitworld01.score = qubitworld01.score + p.score
            qubitworld01.time = qubitworld01.time + p.time
        } else if (p.username === "it18052466") {
            qubitworld01.score = qubitworld01.score + p.score
            qubitworld01.time = qubitworld01.time + p.time
        }

        //codebusters_sli1
        else if (p.username === "it19955896") {
            codebusters_sli1.score = codebusters_sli1.score + p.score
            codebusters_sli1.time = codebusters_sli1.time + p.time
        } else if (p.username === "it19957180") {
            codebusters_sli1.score = codebusters_sli1.score + p.score
            codebusters_sli1.time = codebusters_sli1.time + p.time
        } else if (p.username === "it19142838") {
            codebusters_sli1.score = codebusters_sli1.score + p.score
            codebusters_sli1.time = codebusters_sli1.time + p.time
        }

        //bitlegion123
        else if (p.username === "it19204062") {
            bitlegion123.score = bitlegion123.score + p.score
            bitlegion123.time = bitlegion123.time + p.time
        } else if (p.username === "it19213286") {
            bitlegion123.score = bitlegion123.score + p.score
            bitlegion123.time = bitlegion123.time + p.time
        } else if (p.username === "it19178332") {
            bitlegion123.score = bitlegion123.score + p.score
            bitlegion123.time = bitlegion123.time + p.time
        }

        //logenx24
        else if (p.username === "it18068788") {
            logenx24.score = logenx24.score + p.score
            logenx24.time = logenx24.time + p.time
        } else if (p.username === "it18040036") {
            logenx24.score = logenx24.score + p.score
            logenx24.time = logenx24.time + p.time
        }

        //team404_me
        else if (p.username === "it20020330") {
            team404_me.score = team404_me.score + p.score
            team404_me.time = team404_me.time + p.time
        } else if (p.username === "it20043650") {
            team404_me.score = team404_me.score + p.score
            team404_me.time = team404_me.time + p.time
        } else if (p.username === "it20024772") {
            team404_me.score = team404_me.score + p.score
            team404_me.time = team404_me.time + p.time
        }

        //team_sparks
        else if (p.username === "it18113600") {
            team_sparks.score = team_sparks.score + p.score
            team_sparks.time = team_sparks.time + p.time
        } else if (p.username === "it17167710") {
            team_sparks.score = team_sparks.score + p.score
            team_sparks.time = team_sparks.time + p.time
        } else if (p.username === "it18056976") {
            team_sparks.score = team_sparks.score + p.score
            team_sparks.time = team_sparks.time + p.time
        }

        //datapirates
        else if (p.username === "it18190762") {
            datapirates.score = datapirates.score + p.score
            datapirates.time = datapirates.time + p.time
        } else if (p.username === "it18125344") {
            datapirates.score = datapirates.score + p.score
            datapirates.time = datapirates.time + p.time
        } else if (p.username === "it18188196") {
            datapirates.score = datapirates.score + p.score
            datapirates.time = datapirates.time + p.time
        }

        //algothonpirates
        else if (p.username === "it19115894") {
            algothonpirates.score = algothonpirates.score + p.score
            algothonpirates.time = algothonpirates.time + p.time
        } else if (p.username === "it19115894") {
            algothonpirates.score = algothonpirates.score + p.score
            algothonpirates.time = algothonpirates.time + p.time
        } else if (p.username === "it19115962") {
            algothonpirates.score = algothonpirates.score + p.score
            algothonpirates.time = algothonpirates.time + p.time
        }

        //simruncode
        else if (p.username === "it18123814") {
            simruncode.score = simruncode.score + p.score
            simruncode.time = simruncode.time + p.time
        } else if (p.username === "it18038156") {
            simruncode.score = simruncode.score + p.score
            simruncode.time = simruncode.time + p.time
        } else if (p.username === "it18165876") {
            simruncode.score = simruncode.score + p.score
            simruncode.time = simruncode.time + p.time
        }
        //phoenix2o_mx5
        else if (p.username === "it17131216") {
            phoenix2o_mx5.score = phoenix2o_mx5.score + p.score
            phoenix2o_mx5.time = phoenix2o_mx5.time + p.time
        } else if (p.username === "it17137560") {
            phoenix2o_mx5.score = phoenix2o_mx5.score + p.score
            phoenix2o_mx5.time = phoenix2o_mx5.time + p.time
        } else if (p.username === "it17421768") {
            phoenix2o_mx5.score = phoenix2o_mx5.score + p.score
            phoenix2o_mx5.time = phoenix2o_mx5.time + p.time
        }
        //trojan_interface
        else if (p.username === "it18118032") {
            trojan_interface.score = trojan_interface.score + p.score
            trojan_interface.time = trojan_interface.time + p.time
        } else if (p.username === "it18118100") {
            trojan_interface.score = trojan_interface.score + p.score
            trojan_interface.time = trojan_interface.time + p.time
        } else if (p.username === "it18128246") {
            trojan_interface.score = trojan_interface.score + p.score
            trojan_interface.time = trojan_interface.time + p.time
        }

        //runtimeterror_a1
        else if (p.username === "it18181548") {
            runtimeterror_a1.score = runtimeterror_a1.score + p.score
            runtimeterror_a1.time = runtimeterror_a1.time + p.time
        } else if (p.username === "it18186970") {
            runtimeterror_a1.score = runtimeterror_a1.score + p.score
            runtimeterror_a1.time = runtimeterror_a1.time + p.time
        } else if (p.username === "it18188882") {
            runtimeterror_a1.score = runtimeterror_a1.score + p.score
            runtimeterror_a1.time = runtimeterror_a1.time + p.time
        }

        //3musketeersrvd
        else if (p.username === "it19148632") {
            musketeersRVD.score = musketeersRVD.score + p.score
            musketeersRVD.time = musketeersRVD.time + p.time
        } else if (p.username === "it19144290") {
            musketeersRVD.score = musketeersRVD.score + p.score
            musketeersRVD.time = musketeersRVD.time + p.time
        } else if (p.username === "it19112824") {
            musketeersRVD.score = musketeersRVD.score + p.score
            musketeersRVD.time = musketeersRVD.time + p.time
        }
        //wedontbyte405
        else if (p.username === "it18220520") {
            wedontbyte405.score = wedontbyte405.score + p.score
            wedontbyte405.time = wedontbyte405.time + p.time
        } else if (p.username === "it18219876") {
            wedontbyte405.score = wedontbyte405.score + p.score
            wedontbyte405.time = wedontbyte405.time + p.time
        } else if (p.username === "it18216424") {
            wedontbyte405.score = wedontbyte405.score + p.score
            wedontbyte405.time = wedontbyte405.time + p.time
        }

    })

    let finalArrayOfteams = [];
    arrayTeams.map((m) => {
        finalArrayOfteams.push(m);
    })


    finalArrayOfteams.sort(function(a, b) { return a.score - b.score });

    console.log(data);

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