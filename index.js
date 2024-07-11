const playerStats ={
    "Allan Koech": {
        number: 0,
        shoeSize: 16,
        points: 20,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
    },
    "Benjamin Okello": {
        number: 1,
        shoeSize: 14,
        points: 26,
        rebounds: 10,
        assists: 22,
        steals: 3,
        blocks: 1,
        slamDunks: 10
    },
    "Bakari Bubu": {
        number: 2,
        shoeSize: 16,
        points: 10,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
    },
    "Billy Koech": {
        number: 3,
        shoeSize: 16,
        points: 20,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
    },
    "Jacob Juma": {
        number: 4,
        shoeSize: 16,
        points: 20,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
    },
    "Morris Muhatia": {
        number: 5,
        shoeSize: 16,
        points: 20,
        rebounds: 12,
        assists: 12,
        steals: 3,
        blocks: 1,
        slamDunks: 1
    },
};

function gameObject (){
    const homeTeam = {
        teamName: "Margy Champs",
        colours: ["blue", "White"],
        players: playerStats
    };

    const awayTeam = {
        teamName: "Prince Israel",
        colours: ["black", "yellow"],
        players: playerStats
    };
    return {
        home : homeTeam,
        away : awayTeam
    };
};
console.log(gameObject());

function numPointsScored (){
    const gameData = gameObject();
    let points = 0;

    for (const team in gameData){
        const teamPlayers = gameData[team].players;
        for(const playerNameKey in teamPlayers){
            if (playerNameKey === playerName){
                points = gameData[team]. players[playerNameKey].points;
                break;
            }
        }
       
    }
    return points > 0 ? points : "Player not found";
};
const playerName = "Benjamin Okello";
const points = numPointsScored(playerName);
console.log(`${playerName} scored ${points} points.`)