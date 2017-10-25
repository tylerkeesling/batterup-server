exports.up = function(knex, Promise) {
	return knex.schema.createTable('player', table => {
		table.increments()
    table.integer('team_id').references('team.id').unsigned().onDelete('cascade')
		table.string('name').notNullable()
    table.string('phone')
    table.string('email').notNullable()
    table.string('password').notNullable()
    table.string('position')
    table.string('bio')
		table.string('photo').defaultTo('https://pbs.twimg.com/media/BY0WJYEIEAI02Cx.jpg')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('player')
};
