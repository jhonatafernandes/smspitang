
exports.up = function(knex) {
    return knex.schema.createTable('user', table => {
        table.increments('id').primary()
        table.string('name').notNull()
        table.string('email').notNull().unique()
        table.string('password').notNull().unique()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('user')
  
};
