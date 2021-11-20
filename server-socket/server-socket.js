// will use this to refacto the code for socket
// https://github.com/WebDevSimplified/Realtime-Simple-Chat-App/blob/master/script.js


//this part mean that socket is running on its own localserver
//on port 3030 and thte cors is say yes to share resoures

//might what to change the cros to the web port that is goin to access 
const io = require('socket.io')(3030,{cors: {origin: true}})


// web-sockect stuff, will need to put another file
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
    socket.broadcast.emit('chat-message', {message: message, username: users[socket.id]  })
  })

  socket.on('disconnect', () => {
    //console.log('user disconnected');
    socket.broadcast.emit('user-disconnected', users[socket.id])
    delete users[socket.id]

  });
})//end of socket stuff