const players =[
    {name: 'ShadowStriker', score: 120230,level: 55, gamesPlayed:120},
    {name:'StormBlade', score: 93400, level:65, gamesPlayed:137},
    {name:'PhantomProwler', score: 150330, level: 63, gamesPlayed: 120},
    {name:'InfernoWrath', score:800453, level: 93, gamesPlayed:254},
    {name: 'CyberNinja', score:11892, level: 78, gamesPlayed:208},
    {name: 'FrostBite', score: 133400, level:69, gamesPlayed: 143},
    {name:'MysticMage', score: 120230, level: 55, gamesPlayed:120},
    {name:'WarklordX', score: 142300, level:45, gamesPlayed: 100},
    {name: 'JesterJet', score:100320, level:43, gamesPlayed: 90},
    {name: 'LunaLark', score: 64500, level: 66, gamesPlayed:130},
];


function displayPlayers() {
    const playerBody = document.getElementById('playerBody');
    playerBody.innerHTML = '';
    for (let i = 0; i < players.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${players[i].name}</td><td>${players[i].score}</td><td>${players[i].level}</td><td>${players[i].gamesPlayed}</td>`;
        playerBody.appendChild(row);
    }
    displayLeaderboard();
}

function sortPlayers(criterion) {
    players.sort(function(a, b) {
        if (a[criterion] < b[criterion]) return -1;
        if (a[criterion] > b[criterion]) return 1;
        return 0;
    });
    displayPlayers();
}

function applyFilter() {
    const criterion = document.getElementById('filterCriteria').value;
    if (criterion === 'score' || criterion === 'level') {
        players.sort(function(a, b) {
            return b[criterion] - a[criterion];
        });
    } else {
        players.sort(function(a, b) {
            if (a[criterion] < b[criterion]) return -1;
            if (a[criterion] > b[criterion]) return 1;
            return 0;
        });
    }
    displayPlayers();
}

function displayLeaderboard() {
    const leaderboardBody = document.getElementById('leaderboardBody');
    leaderboardBody.innerHTML = '';
    const topPlayers = [...players].sort((a, b) => b.score - a.score).slice(0, 3);
    for (let i = 0; i < topPlayers.length; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${topPlayers[i].name}</td><td>${topPlayers[i].score}</td>`;
        leaderboardBody.appendChild(row);
    }
}

document.addEventListener('DOMContentLoaded', displayPlayers);