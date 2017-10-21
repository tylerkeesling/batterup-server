const knex = require('./knex')

module.exports = {
  getAllPlayers: () => {
    return knex('player')
  },
  getRoster: (teamId) => {
    return knex('player').where('team_id', teamId)
  }
}
