

const express = require('express')
const http = require("http");
const expressHandlebars = require('express-handlebars')
//const fire = require('firebase')
const app = express()  
const server = http.createServer(app);
const socket = require("socket.io");
const io = socketIO(server);

app.use(express.static(__dirname + '/public'))

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.set("views", './views')

const port = process.env.PORT || 3000;

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

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/views/chat.html')
})



io.on("connection", (socket_io) => {
  console.log('User is connected successfully');
  socket_IO.emit("connection", null);
})

socketIO.on('send-message', msg => {
  io.emit('message', msg);
‍})

  socket_io.on("disconnect", () => {
    console.log('Sorry! User is unfortunately disconnected');
  })



//the port
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}` +
  `press Ctrl-C to terminate.`));