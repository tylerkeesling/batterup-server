exports.seed = function(knex, Promise) {
  return knex.raw('DELETE FROM "season"; ALTER SEQUENCE season_id_seq RESTART WITH 2;')
    .then(() => {
      let seasons = [{
        id: 1,
        title: 'Fall 2017',
        startDate: '2017-7-1',
        location: 'Sloans Lake'
      }]
      return knex('season').insert(seasons)
    })
};
