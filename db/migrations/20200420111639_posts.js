exports.up = knex => knex.schema.createTable('partners', (table) => {
    table.increments();
    table.string('title').notNullable();
    table.text('description');
    table.text('content').notNullable();
    table.timestamps(true, true);
});

exports.down = knex => knex.schema.dropTable('partners');
