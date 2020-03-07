
exports.up = function(knex, promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('username').notNull().unique()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.string('imageUrl')
        table.boolean('admin').defaultTo(0)
        table.dateTime('deletedAt')


    })
  
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('users')
  
};
