
exports.up = function(knex) {
    return knex.schema.createTable('storys', table => {
        table.increments('id').primary()
    } )
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('storys')
  
};
