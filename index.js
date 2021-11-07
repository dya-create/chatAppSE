//server.js
//let http = require('http')
//let socketIO = require('socket.io')

const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()  

app.use(express.static(__dirname+'/public'))

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.set("views", './views')

const port = process.env.PORT || 3000;

//let server = http.Server(app) 
//let io = socketIO(server) 

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/homepage.html')
})

app.get('/credits', (req, res) => {
  res.sendFile(__dirname + '/views/credits.html')
})

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/views/login.html')
})
//going to need a app.post 


app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/signup.html')
})





/*  
io.on('connection', (socket) => {
  console.log('User is connected sucessfully')
  
  socket.on('disconnect', () => {
    console.log('Sorry! User is unfortunately disconnected')
  })
})
*/


//the port
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))