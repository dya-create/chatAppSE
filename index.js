const express = require('express')
const app = express()

//this part mean that socket is running on its own localserver
//on port 3030 and thte cors is say yes to share resoures
const io = require('socket.io')(3030,{cors: {origin: true}})

const expressHandlebars = require('express-handlebars')
const webroute = require('./webroutes') // made file just for webroutes 


//
app.use(express.static(__dirname + '/public'))

app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))

app.set('view engine', 'handlebars')
app.set("views", './views')

const port = process.env.PORT || 3000;

// webroutes contral
app.use('/', webroute)

// web-sockect stuff, will need to put another file
const users = {}
io.on('connection', (socket) => {
  socket.on('new-user', username => {
    users[socket.id] = username
    socket.broadcast.emit('user-connected', username)
  })
  //console.log('a user connected');
  //socket.emit('chat-message', 'hello word')//sending test to users

  socket.on('send-chat-message', message => {
    //console.log(message)
    socket.broadcast.emit('chat-message', {message: message, username: users[socket.id]  })
  })

  socket.on('disconnect', () => {
    //console.log('user disconnected');
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]

  });
})//end of socket stuff



//the port
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}` +
  ` press Ctrl-C to terminate.`));