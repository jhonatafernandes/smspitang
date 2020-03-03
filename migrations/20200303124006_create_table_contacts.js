
exports.up = function(knex, promise) {
    return knex.schema.createTable('contacts', table => {
        table.increments('id').primary()
        table.string('name')
        table.integer('idOwner').references('id').inTable('users').notNull()
        table.integer('idTarget').references('id').inTable('users').notNull()


    })
  
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('contacts')
  
};
