
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vote', function(table){
      table.increments();
      table.integer('pixel_art_id').references('pixel_art.id');
      table.integer('value');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vote');
};
