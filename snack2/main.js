'use strict';

// Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
const teams = [
    {
        name: 'team1',
        points: 0,
        fouls:  0
    } , {
        name: 'team2',
        points: 0,
        fouls:  0
    } , {
        name: 'team3',
        points: 0,
        fouls:  0
    } , {
        name: 'team4',
        points: 0,
        fouls:  0
    }
];

console.log(JSON.parse(JSON.stringify(teams)));
generateStats(teams);
console.log(teams);

const newTeams = teams.map((element) => {
    return {
        name: element.name,
        fouls: element.fouls
    };
});

console.log(newTeams);


// FUNCTIONS
function generateStats(myTeams) {
    myTeams.forEach( (element) => {
        element.points = generateNumber(90);
        element.fouls = generateNumber(30);
    });
}

function generateNumber(num) {
    return Math.floor(Math.random()*num);
}
