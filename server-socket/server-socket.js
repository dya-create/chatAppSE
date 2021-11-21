// https://github.com/WebDevSimplified/Realtime-Simple-Chat-App/blob/master/script.js

//this part mean that socket is running on its own localserver

//to test when running  http://localhost:3030/socket.io/socket.io.js
const io = require('socket.io')(3030, {
  cors: {
    origin: true,
    methods: ["GET", "POST"]
  },
})


const users = {}
io.on('connection', (socket) => {
  socket.on('new-user', username => {
    users[socket.id] = username
    socket.broadcast.emit('user-connected', username)
  })
  console.log('a user connected');
  //socket.emit('chat-message', 'hello word')//sending test to users

  socket.on('send-chat-message', message => {
    //console.log(message)
    socket.broadcast.emit('chat-message', { message: message, username: users[socket.id] })
  })

  socket.on('disconnect', () => {
    //console.log('user disconnected');
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]

  });
})