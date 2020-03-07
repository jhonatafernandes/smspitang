
exports.up = function(knex, promise) {
    return knex.schema.createTable('histpassword', table => {
        table.increments('id').primary()
        table.integer('userId').references('id').inTable('users').notNull()
        table.string('password').notNull()
        table.dateTime('dateTimeAlteration').defaultTo(knex.fn.now())
        


    })
  
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('histpassword')
  
};
