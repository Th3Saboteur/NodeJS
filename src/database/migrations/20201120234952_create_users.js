
exports.up = function(knex) {
    return knex.schema.createTable('users', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.integer('idade').notNullable();
        table.string('empresa');
      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
