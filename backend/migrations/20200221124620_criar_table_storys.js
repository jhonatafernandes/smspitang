
exports.up = function(knex, promise) {
    return knex.schema.createTable('storys', table => {
        table.increments('id').primary()
        table.string('message').notNull()
        table.integer('userId').unsigned().references('id').inTable('users').notNull()
        table.timestamp('dateTimeStory').notNullable().defaultTo(knex.fn.now())
        table.string('type', 1).notNull()
        table.dateTime('deletedAt')
    } )
  
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('storys')
  
};
