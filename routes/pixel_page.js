var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

router.get('/', (req, res) => {
  console.log("hit route")
  queries.getPainting()
  .then(data => {

    var randomIndex = [Math.floor(Math.random() * ((data.length)-1))]
    data=data[randomIndex]
    console.log(data)
    res.render('pixel_page', {data})
  })
})


module.exports = router;
