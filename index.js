
const express = require('express')
const app = express()
const expressHandlebars = require('express-handlebars')
const webroute = require('./webroutes') // made file just for webroutes 


//add files to share
app.use(express.static(__dirname + '/public'))

//use this as a html temp 
app.engine('handlebars', expressHandlebars({
  defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')
app.set("views", './views')


const port = process.env.PORT || 3000;

// webroutes contral
app.use('/', webroute)

//the port
app.listen(port, () => console.log(
  `Express started on http://localhost:${port}` +
  ` press Ctrl-C to terminate.`));
  