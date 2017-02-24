var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var bios = require('./routes/people.js');
var serverPort = 3000;
// var peopleList = [
//   {name:"Jeremy", bio: "I am fucking Awesome", image:"jeremypicture.jpg",likes:0},
//   {name:"Tom", bio: "I am fucking Awesomer",image:"tompicture.jpg",likes:0},
//   {name:"Catherine", bio: "I am fucking Awesomest",image:"catherine.jpeg",likes:0},
//   {name:"Paul", bio: "I am fucking Lame as Shit!",image:"paulpicture.jpeg",likes:0}
// ];

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/bios',bios);
app.listen(serverPort);
