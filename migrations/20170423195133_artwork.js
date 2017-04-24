
exports.up = function(knex, Promise) {
  return knex.schema.createTable('artwork', function(table){
     table.increments();
      table.string('name');
      table.string('artist');
      table.string('url');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('artwork');
};
