var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

router.get('/', (req, res) => {
  queries.getPainting()
  .then(data => {
    var randomIndex = [Math.floor(Math.random() * ((data.length)-1))]
    data=data[randomIndex]
    var artworkId = data.id
    res.render('pixel_page', {data, artworkId})
  })
})

router.post('/addPixelArt', (req, res) => {
  console.log(req.body)
  queries.addPixelArt(req.body)
    .then(() => {
      res.redirect('/gallery')
    })

});



module.exports = router;
