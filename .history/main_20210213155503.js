const axios = require("axios").default;

const addApartment = async() => {
    const response = await axios.post(
        'https://www.hackerrank.com/rest/contests/mockcompetition/leaderboard'
    );
    console.log(response)
}

addApartment();