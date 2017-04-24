const pg = require('./knex');

function addPixelArt(data) {
  return pg('pixel_art').insert(data);
};

function addVote(data) {
  return pg('vote').insert(data);
};

function deletePixelArt(data) {
  return pg('pixel_art').where('id', data.id).del();
};

function changePassword(data) {
  return pg('user').where('id', data.id).update('password', data.password);
};

module.exports = {
  addPixelArt,
  addVote,
  deletePixelArt,
  changePassword,
}