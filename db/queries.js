const pg = require('./knex');

function addUser(data) {
  return pg('myuser').insert(data);
};

function findUserIfExists() {
  return pg('myuser').select();
};

function userTable(obj) {
  return pg('myuser').insert({
    first_name: obj.first_name,
    last_name: obj.last_name,
    username: obj.email,
    email: obj.email,
    password: obj.password,
    isAdmin: false
  });
};
function getPixelArtByUser(data) {
  return pg('myuser').join('pixel_art', 'myuser.id', 'pixel_art.user_id').where('myuser.id', data.id);
};

function getPixelArtByArtwork(data) {
  return pg('artwork').join('pixel_art', 'artwork.id', 'pixel_art.artwork_id').where('artwork.id', data.id);
};

function addPixelArt(data) {
  return pg('pixel_art').insert({
    div_data: data.div_data,
    artwork_id: data.artwork_id
  });
};

function addVote(data) {
  return pg('vote').insert(data);
};

function deletePixelArt(id) {
  return pg('pixel_art').where('id', '=', id).del();
};

function changePassword(data) {
  return pg('myuser').where('id', data.id).update('password', data.password);
};

function getPainting(){
  return pg('artwork').select();
}
function getPixels(data){
  return pg('pixel_art').select()
}
module.exports = {
  addUser,
  findUserIfExists,
  getPixelArtByUser,
  getPixelArtByArtwork,
  addPixelArt,
  addVote,
  deletePixelArt,
  changePassword,
  userTable,
  getPainting,
  getPixels
}
