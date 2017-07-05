var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

// router.get('/', (req, res) => {
//   console.log("gotcha")
//   queries.getPainting()
//   .then((data) => {
//     res.render('gallery', {data})
//   })
// })
router.get('/', (req, res) => {
console.log('gotcha')
  queries.getPixels()
  .then(item =>{
    res.render('gallery', {item})
  })
})

router.get('/:id/delete', (req, res, next) => {
  console.log("hit route")
  queries.deletePixelArt(req.params.id)
  .then(() => {
    res.redirect('/gallery')
  })
})


module.exports = router;
