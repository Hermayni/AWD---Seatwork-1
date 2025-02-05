let players = JSON.parse(localStorage.getItem('players')) || [];

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

function addPlayer() {
    const name = document.getElementById('playerName').value;
    const score = document.getElementById('playerScore').value;
    const level = document.getElementById('playerLevel').value;
    const gamesPlayed = document.getElementById('gamesPlayed').value;

    if (name && score && level && gamesPlayed) {
        players.push({ name, score: parseInt(score), level: parseInt(level), gamesPlayed: parseInt(gamesPlayed) });
        localStorage.setItem('players', JSON.stringify(players));
        displayPlayers();
        document.getElementById('playerName').value = '';
        document.getElementById('playerScore').value = '';
        document.getElementById('playerLevel').value = '';
        document.getElementById('gamesPlayed').value = '';
    } else {
        alert('Please fill in all fields.');
    }
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



document.addEventListener('DOMContentLoaded', displayPlayers);