function formatPlayerStats(playerStats) {
  let reformatStats = {
    "player": {
      "player_id": playerStats[0].id,
      "team_id": playerStats[0].team_id,
      "name": playerStats[0].name
    },
    "game_stats": formatGameStats(playerStats)
  }
  return reformatStats
}

function formatGameStats(playerStats) {
  let gameStatsArray = []
  playerStats.map(singleGameStats => {
    let stats = {
      "game_id": singleGameStats.game_id,
      "at_bat": singleGameStats.at_bat,
      "single": singleGameStats.single,
      "double": singleGameStats.double,
      "triple": singleGameStats.triple,
      "homerun": singleGameStats.homerun,
      "walk": singleGameStats.walk,
      "rbi": singleGameStats.rbi
    }
    gameStatsArray.push(stats)
  })
  return gameStatsArray
}

function formatTeamStats(allStats) {
  let singlePlayerStats = []
  let result = []
  for (let i = 1; i < 12; i++) {
    singlePlayerStats = allStats.filter(game => {
        return game.id === i
    })
    result.push(formatPlayerStats(singlePlayerStats))
  }
  return result
}

module.exports = {
  formatPlayerStats,
  formatTeamStats
}
