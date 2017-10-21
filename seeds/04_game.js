exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "game"; ALTER SEQUENCE game_id_seq RESTART WITH 5;')
    .then(() => {
      let games = [{
        id: 1,
        season_id: 1,
        gameDate: '2017-8-5'
      },{
        id: 2,
        season_id: 1,
        gameDate: '2017-8-12'
      },{
        id: 3,
        season_id: 1,
        gameDate: '2017-8-19'
      },{
        id: 4,
        season_id: 1,
        gameDate: '2017-8-26'
      }]
      return knex('game').insert(games)
    })
};
