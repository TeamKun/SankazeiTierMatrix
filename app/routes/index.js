const { response } = require('express');
let express = require('express');
let router = express.Router();


/* GET home page. */
router.get('/', async function(req, res, next) {
    let connection = require('../db/connection.js')
    let result = await connection.init(1)

    res.render('index', {
        theme: result[0][0],
        players: result[1],
        genders: result[2],
        ages: result[3],
        areas: result[4]
    });
});

router.post('/', async function(req, res, next) {
    let connection = require('../db/connection.js')
    console.log(req.body.gender)
    console.log('ip : ' + req.ip)
    await connection.post(req.body, req.ip)
    res.redirect('/')
});

module.exports = router;