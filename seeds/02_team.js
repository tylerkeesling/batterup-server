exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "team"; ALTER SEQUENCE team_id_seq RESTART WITH 2;')
    .then(() => {
      let teams = [{
        id: 1,
        name: "Legends of the Hittin' Temple",
        season_id: 1
      }]
      return knex('team').insert(teams)
    })
};
