
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary().unique()
    })
  
};

exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
  
};
