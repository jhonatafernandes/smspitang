
exports.up = function(knex, promise) {
    return knex.schema.createTable('histPasswd', table => {
        table.increments('id').primary()
        table.integer('userId').references('id').inTable('users').notNull()
        table.string('password').notNull()
        table.dateTime('dateTimeAlteration').notNull().defaultTo(knex.fn.now())
        


    })
  
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('histPasswd')
  
};
