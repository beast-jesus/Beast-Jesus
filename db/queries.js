const pg = require('./knex');

function addUser(data) {
  return pg('myuser').insert(data);
};

function getPixelArtByUser(data) {
  return pg('myuser').join('pixel_art', 'myuser.id', 'pixel_art.user_id').where('myuser.id', data.id);
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
  return pg('myuser').where('id', data.id).update('password', data.password);
};

module.exports = {
  addUser,
  getPixelArtByUser,
  getPixelArtByArtwork,
  addPixelArt,
  addVote,
  deletePixelArt,
  changePassword,
}
