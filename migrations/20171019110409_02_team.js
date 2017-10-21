exports.up = function(knex, Promise) {
	return knex.schema.createTable('team', table => {
		table.increments()
		table.string('name').notNullable()
    table.integer('season_id').references('season.id').unsigned().onDelete('cascade')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('team')
};
