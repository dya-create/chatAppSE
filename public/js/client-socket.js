
// using CDN to get the socket.io-client files

//conncecting to socket server - adrian made the server
var socket = io("https://serversocket.azurewebsites.net", {withCredentials: true}); 
//var socket = io("http://localhost:3030", {withCredentials: true}); 
// use  when run socker-server locally 
const messageContainer = document.getElementById('message-container')
const messageForm = document.getElementById('form-data')
const messageInput = document.getElementById('text-input')

//assk userfor name to display
const username = prompt("what is your name")
appendMessage("you joined!")
socket.emit('new-user', username)


//will add any text message that someone else so the uesr can see the text
socket.on('chat-message', data => {
    //console.log(data)
    appendMessage(data.username + ': ' + data.message)
})
//will show any new user connected 
socket.on('user-connected', username => {
    appendMessage( username + ' has connected to the chat')
})
socket.on('user-disconnected', username => {
    appendMessage( username + ' has disconnected to the chat')
})

messageForm.addEventListener('submit', e => {
    e.preventDefault()
    const message = messageInput.value//
    appendMessage('you: ' + message)
    socket.emit('send-chat-message', message)
    messageInput.value = ''

})

//add text that someone else sent
function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)

}

socket.on('image', function(msg){
    socket.emit('image', msg);
  });
  