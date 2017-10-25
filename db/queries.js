const knex = require('./knex')

module.exports = {
  getPlayer: (teamId, playerId) => {
    return knex('player')
      .select('name', 'phone', 'email', 'position', 'bio')
      .where('id', playerId)
  },
  getRoster: (teamId) => {
    return knex('player')
    .select('id', 'name', 'phone', 'email', 'position', 'bio', 'photo')
    .where('team_id', teamId)
  },
  getAllStatsByTeamId: (teamId) => {
    return knex('player')
      .select('name', 'player.id', 'team_id', 'game_id', 'at_bat',
      'single', 'double', 'triple', 'homerun', 'rbi')
      .where('team_id', teamId)
      .innerJoin('player_game', 'player.id', 'player_id')
  },
  getStatsByPlayerId: (playerId) => {
    return knex('name').from('player')
      .innerJoin('player_game', 'player.id', 'player_game.player_id')
      .where('player.id', playerId)
  },
  getGames: () => {
    return knex('game')
  },
  createGame: () => {
    return knex.insert({'gameDate': new Date(), 'season_id': 1})
      .into('game')
      .returning('id')
  },
  createPlayerGame: (game_id, player_id) => {
      return knex.insert({ 'player_id': player_id, 'game_id': game_id })
      .into('player_game')
      .returning('*')
  },
  seePlayerGame: () => {
    return knex('player_game')
  }
}
