// Update with your config settings.

module.exports = {

  client: 'postgresql',
  connection: {
    database: 'dbsmspitang',
    user:     'postgres',
    password: '8569'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
  

};
