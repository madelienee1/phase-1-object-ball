function gameObject() {
  return {
    home: {
      teamName: 'Brooklyn Nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },

        'Reggie Evans': {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        'Mason Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: 'Charlotte Hornets',
      colors: ['Turquoise', 'Purple'],
      players: {
        'Jeff Adrien': {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        'Bismak Biyombo': {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        'DeSagna Diop': {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        'Ben Gordon': {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        'Brendan Haywood': {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

console.log(gameObject());

const gameData = gameObject();

// Points Scored

// gameObject();

function numPointsScored(playerName) {
  if (gameData.home.players[playerName]) {
    return gameData.home.players[playerName].points;
  }
  if (gameData.away.players[playerName]) {
    return gameData.away.players[playerName].points;
  }

  return `Player ${playerName} not found.`;
}

console.log(numPointsScored('Alan Anderson'));

// Shoe Size

function shoeSize(playerName) {
  if (gameData.home.players[playerName]) {
    return gameData.home.players[playerName].shoe;
  }
  if (gameData.away.players[playerName]) {
    return gameData.away.players[playerName].shoe;
  }

  return `Player ${playerName} not found.`;
}

console.log(shoeSize('Alan Anderson'));

// Team Colours

function teamColors(teamName) {
  const awayTeam = gameData.away
  const homeTeam = gameData.home

  if (homeTeam.teamName === teamName) {  
    return homeTeam.colors
  }
  if (awayTeam.teamName === teamName) {
    return awayTeam.colors

  }

  console.log(`team ${teamName} not found.`);
}

console.log(teamColors('Brooklyn Nets'));
console.log(teamColors('Charlotte Hornets'));

// Team Names
const teamLocation = 'away'

gameData[teamLocation]

function playerNumbers(requestedTeamName) {
  let teamPlayers
  if (gameData.home.teamName === requestedTeamName) {
    teamPlayers = gameData.home.players
  }
  if (gameData.away.teamName === requestedTeamName) {
    teamPlayers = gameData.away.players
  }
  

  const players = Object.values(teamPlayers)

  // const playersNames = Object.keys(teamPlayers)
  // console.log(playersNames)

  // const numbers = playersNames.map((name) => {
  //   return teamPlayers[name].number
  // })
  // console.log(numbers)


  // const playersArray = Object.entries(teamPlayers)
  // const numbers = playersArray.map(([_, player]) => player.number)
  // console.log(numbers)
  
  return players.map((player) => player.number)
 }

 console.log(playerNumbers('Brooklyn Nets'));

