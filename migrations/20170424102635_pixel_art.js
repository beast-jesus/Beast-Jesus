
exports.up = function(knex, Promise) {
  return knex.schema.createTable('pixel_art', function(table){
      table.increments();
      table.integer('artwork_id').references('artwork.id');
      table.integer('user_id').references('myuser.id');
      table.text('div_data');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('pixel_art');
};
