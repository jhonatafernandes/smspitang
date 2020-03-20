
exports.up = function(knex, promise) {
    return knex.schema.createTable('messages', table => {
        table.increments('id').primary()
        table.string('message').notNull()
        table.integer('srcId').unsigned().references('id').inTable('users').notNull()
        table.integer('destId').unsigned().references('id').inTable('users').notNull()
        table.timestamp('dateTimeMessage').notNullable().defaultTo(knex.fn.now())
        table.smallint('statusSrc', 1).unsigned()
        table.smallint('statusDest', 1).unsigned()
        table.smallint('delSrc', 1).unsigned()
        table.smallint('delDest', 1).unsigned()
        table.smallint('backup', 1).unsigned()
    } )
  
};

exports.down = function(knex, promise) {
    return knex.schema.dropTable('messages')
  
};
