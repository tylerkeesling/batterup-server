
exports.up = function(knex, Promise) {
  return knex.schema.createTable('player_game', table => {
    table.increments()
    table.integer('player_id').references('player.id').unsigned().onDelete('cascade').notNullable()
    table.integer('game_id').references('game.id').unsigned().onDelete('cascade').notNullable()
    table.integer('at_bat').defaultTo(0)
    table.integer('single').defaultTo(0)
    table.integer('double').defaultTo(0)
    table.integer('triple').defaultTo(0)
    table.integer('homerun').defaultTo(0)
    table.integer('walk').defaultTo(0)
    table.integer('rbi').defaultTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('player_game')
};
