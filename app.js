const express = require('express')
const mongoose = require('mongoose')
const User = require('./handlers/database').User

// Establish connection
mongoose.connect('mongodb://localhost:27017/todo')

// Check connection status
var db = mongoose.connection
db.on('error', console.error.bind((console, 'connetion-error')))


/*
// Save if Connected
db.once('open', function() {
    console.log("Connected\n")
    var register = new User({
        name: 'Microsoft Co.',
        username: 'surface',
        password: 'oshu525123'
    })
    register.save(function(err, save) {
        if (err) throw err
        console.log("Saved\n")
    })
})

*/


var about = require('./handlers/routes')
var path = require('path')
var app = express()
var prt = process.env.PORT || 3000

app.set('view engine', 'ejs')
app.use("/", express.static('public'))
app.use("/users", express.static('public'))
app.use("/users/login", express.static('public'))
app.use("/users/register", express.static('public'))

app.get('/', function(req, res) {
    res.render('index')
})
app.get('/set', function(req, res) {
    res.send(200, req.query.name)
})
app.use('/users', about)

app.use(function(req, res) {
    res.render('404')
})
app.listen(prt, () => console.log("server started"))









