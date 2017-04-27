const pg = require('./knex');

function addUser(data) {
  return pg('user').insert(data);
};

function findUserIfExists() {
  return pg('user').select();
};

function userTable(obj) {
  return pg('user').insert({
    email: obj.email,
    password: obj.password
  });
};
function getPixelArtByUser(data) {
  return pg('user').join('pixel_art', 'user.id', 'pixel_art.user_id').where('user.id', data.id);
};

function getPixelArtByArtwork(data) {
  return pg('artwork').join('pixel_art', 'artwork.id', 'pixel_art.artwork_id').where('artwork.id', data.id);
};

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
  addUser,
  findUserIfExists,
  getPixelArtByUser,
  getPixelArtByArtwork,
  addPixelArt,
  addVote,
  deletePixelArt,
  changePassword,
  userTable
}
