const pg = require('./knex');

function addPixelArt(data) {
  return pg('pixel_art').insert(data);
};

function addVote(data) {
  
};

module.exports = {
  addPixelArt,
}
