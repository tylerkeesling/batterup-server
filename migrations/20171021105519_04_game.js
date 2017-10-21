exports.up = function(knex, Promise) {
	return knex.schema.createTable('game', table => {
		table.increments()
    table.integer('season_id').references('season.id').unsigned().onDelete('cascade').notNullable()
		table.date('gameDate')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('game')
};
