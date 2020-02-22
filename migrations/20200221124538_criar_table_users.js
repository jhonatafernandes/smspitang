
exports.up = function(knex, promise) {
    return knex.schema.createTable('users', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull()
        table.string('cellphone').notNull().unique()
        table.string('imageUrl')
        table.boolean('admin').defaultTo(0)


    })
  
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('users')
  
};
