// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
// knexfile.js
module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_do_banco'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },
  production: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'seu_usuario',
      password: 'sua_senha',
      database: 'nome_do_banco'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};

