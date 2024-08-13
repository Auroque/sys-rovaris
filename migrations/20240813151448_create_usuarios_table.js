/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', function(table) {
      table.increments('id').primary(); // Coluna ID com auto-incremento
      table.string('nome', 255).notNullable(); // Nome do usuário
      table.string('usuario', 50).notNullable().unique(); // Nome de usuário único
      table.string('email', 255).notNullable().unique(); // E-mail único
      table.string('senha', 255).notNullable(); // Senha do usuário (deve ser criptografada)
      table.boolean('ativo').defaultTo(true); // Status ativo
      table.timestamp('created_at').defaultTo(knex.fn.now()); // Data de criação
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('usuarios');
  };