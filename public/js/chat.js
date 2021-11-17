const msgerForm = get(".msger-inputarea");
const msgerInput = get(".msger-input");
const msgerChat = get(".msger-chat");

import React from 'react';
import styled from "styled-components";
import socketClient from "socket.io-client";

    

const BOT_MSGS = [
  "Hi, how are you?"
];



// Icons made by Freepik from www.flaticon.com
const BOT_IMG = "https://image.flaticon.com/icons/svg/327/327779.svg";
const PERSON_IMG = "https://image.flaticon.com/icons/svg/145/145867.svg";
const BOT_NAME = "BOT";
const PERSON_NAME = "EzMessageUser";


msgerForm.addEventListener("submit", event => {
  event.preventDefault();

  const msgText = msgerInput.value;
  if (!msgText) return;

  appendMessage(PERSON_NAME, PERSON_IMG, "right", msgText);
  msgerInput.value = ''

  botResponse();
});



/*var socket = io.connect()
function addMessage(data, isSelf = false){
  const messageElement = document.createElement('div')
  messageElement.classList.add('message')

  if (isSelf) {
    messageElement.classList.add('self-message')
    messageElement.innerText = `${data.message}`
  } else {
    if (data.user === 'server'){
      messageElement.innerText = `${data.message}`
    } else {
      messageElement.classList.add('BOT')
      messageElement.innerText = `${data.BOT}:${data.message}`
    }
  }
  const msgerChat = document.getElementById('msgerChat')
  msgerChat.append(messageElement)
}

const msgerForm = document.getElementById('msgerForm')

msgerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const msgerInput = document.getElementById('msgerInput')
  if (msgerInput.value !== '') {
    let newMessage = msgerInput.value
    socket.emit('new-message', { user: socket.id, message: newMessage })
    addMessage({ message: newMessage }, true)
    msgerInput.value = ''
  } else {
    msgerInput.classList.add('error')
  }
})

socket.on('botResponse', (data) => {
  console.log('botResponse event >> ', data)
  addMessage(data, false)
})/*



/*window.onload = function() {

  var form = document.getElementById('msgerForm');
  var messageField = document.getElementById('msgerInput');
  var messagesList = document.getElementById('msgerChat');
  var socketStatus = document.getElementById('status');

  var socket = new WebSocket();
  socket.onopen = function(event) {
    socketStatus.innerHTML = 'Connected to: ' + event.currentTarget.url;
    socketStatus.className = 'open';

    socket.send(data);
    form.onsubmit = function(e) {
      e.preventDefault();
    
      // Retrieve the message from the textarea.
      var messageField = msgerInput.value;
    
      // Send the message through the WebSocket.
      socket.send(msgerInput);
    
      // Add the message to the messages list.
      msgerChat.innerHTML += '<li class="sent"><span>Sent:</span>' + message + '</li>';
    
      // Clear out the message field.
      msgerInput.value = '';
    
      return false;/*

/*
const App = ()=>{
  const [yourID, setYourId] = useState();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = userState("");

  const socketRef = useRef();

  useEffect(()=>{

  socketRef.current = io.connect('/');
  
  socketRef.current.on("your id", id => {
    setYourId(id);
  })

  socketRef.current.on("message", (message)=>{

  })
});

function receivedMessage (message){
  setMessages(oldMsgs => [...oldMsgs, message]);
}

function sendMessage(e){
  e.preventDefault();
  const messageObject = {
    body: message,
    id: yourID,

  };
  setMessage("");
  socketRef.current.emit("send Message", mmessageObject);
}

function handleChange(e){
  setMessage(e.target.value);
}

return(
  <Page>
    <Container>
      {messages.mao((message,index)=>
      if)}

    </Container>
  </Page>
)



};


*/

function appendMessage(name, img, side, text) {
  //   Simple solution for small apps
  const msgHTML = `
  <div class="msg ${side}-msg">
      <div class="msg-img" style="background-image: url(${img})"></div>

      <div class="msg-bubble">
        <div class="msg-info">
          <div class="msg-info-name">${name}</div>
          <div class="msg-info-time">${formatDate(new Date())}</div>
        </div>

        <div class="msg-text">${text}</div>
      </div>
    </div>
  `;

  msgerChat.insertAdjacentHTML("beforeend", msgHTML);
  msgerChat.scrollTop += 500;
}

function botResponse() {
  const r = random(0, BOT_MSGS.length - 1);
  const msgText = BOT_MSGS[r];
  const delay = msgText.split(" ").length * 100;

  setTimeout(() => {
    appendMessage(BOT_NAME, BOT_IMG, "left", msgText);
  }, delay);
}

// Utils
function get(selector, root = document) {
  return root.querySelector(selector);
}

function formatDate(date) {
  const h = "0" + date.getHours();
  const m = "0" + date.getMinutes();

  return `${h.slice(-2)}:${m.slice(-2)}`;
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}