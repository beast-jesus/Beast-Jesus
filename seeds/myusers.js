
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('myuser').del()
    .then(function () {
      // Inserts seed entries
      return knex('myuser').insert([
        {first_name: "ad", last_name: "min", email: "admin@admin.com", username: "admin", password: "", isAdmin: true},
      ]);
    });
};
