const express = require('express')
// const bodyParser = require('body-parser')

const router = express.Router()

// var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', function (req, res) {
    res.render('profile')
})

router.get('/login', function (req, res) {
    res.render('login')
})

router.get('/register', function (req, res) {
    res.render('register')
})

router.post('/register'/*, urlencodedParser*/, function (req, res) {
    res.send(req.body)
    console.log(req.body)
})


module.exports = router