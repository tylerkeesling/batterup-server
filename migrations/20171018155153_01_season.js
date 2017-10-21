exports.up = function(knex, Promise) {
	return knex.schema.createTable('season', table => {
		table.increments()
		table.string('title').notNullable()
		table.date('startDate').notNullable()
		table.string('location')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('season')
};
