//https://medium.com/swlh/node-js-router-and-routes-a4a3cfced5c4

//look into later 
const express = require('express')
let app = express.Router()

//web routes //
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/homepage.html')
})

app.get('/credits', (req, res) => {
    res.sendFile(__dirname + '/views/credits.html')
})

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/views/login.html')
})

app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/views/signup.html')
})

app.get('/chatpage', (req, res) => {
    res.sendFile(__dirname + '/views/chatpage.html')
})

module.exports = app