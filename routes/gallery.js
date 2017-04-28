var express = require('express');
var router = express.Router();
var queries = require('../db/queries')

router.get('/', (req, res) => {
  console.log("hit route")
  queries.getPainting()
  .then(data => {
    res.render('gallery', {data})
  })
})


router.post('/addPixelArt', (req, res) => {
    var data = {};
    document.getElementByClassName('cell').each(function () {
        var pixClass = this.class;
        console.log(pixClass)
        if (pixClass.length > 4) {
            data[this.id] = pixClass.slice(5);
        }
    });
    req.body.div_data = data;
    queries.addPixelArt(req.body)
        .then(data => {
            res.render('gallery', {
                data
            });
        });
});

module.exports = router;
