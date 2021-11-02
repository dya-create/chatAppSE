//server.js
let express = require('express')
let http = require('http')
let socketIO = require('socket.io') 

const port = 8000
let app = express() 
let server = http.Server(app) 
let io = socketIO(server) 

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/views/homepage.html')

})

io.on('connection', (socket) => {
  console.log('User is connected sucessfully')
  
  socket.on('disconnect', () => {
    console.log('Sorry! User is unfortunately disconnected')
  })
})

server.listen(port, () => {
   console.log(`Running on port ${port}.`);
});