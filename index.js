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
//going to need a app.post ????????


app.get('/signup', (req, res) => {
  res.sendFile(__dirname + '/views/signup.html')
})

app.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/views/chat.html')
})





/*  
io.on('connection', (socket) => {
  console.log('User is connected sucessfully')
  
  socket.on('disconnect', () => {
    console.log('Sorry! User is unfortunately disconnected')
  })
})
*/

/*// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBAPAS9oHu15taZfGh7sjUkw6n0zXKaouY",
  authDomain: "software-eng-project-6159f.firebaseapp.com",
  projectId: "software-eng-project-6159f",
  storageBucket: "software-eng-project-6159f.appspot.com",
  messagingSenderId: "797548759506",
  appId: "1:797548759506:web:9ccfb4066427842b3f200b",
  measurementId: "G-CVVV1HJ9QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/



//the port
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}; ` +
  `press Ctrl-C to terminate.`))