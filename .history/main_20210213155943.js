fetch('https://www.hackerrank.com/rest/contests/mockcompetition/leaderboard')
    .then(response => response.json())
    .then(data => console.log(data));