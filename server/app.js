var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var bios = require('./routes/bios.js');
var peopleList = [
  {name:"Jeremy", bio: "I am fucking Awesome", image:"jeremypicture.jpg",likes:0},
  {name:"Tom", bio: "I am fucking Awesomer",image:"tompicture.jpg",likes:0},
  {name:"Catherine", bio: "I am fucking Awesomest",image:"catherine.jpeg",likes:0},
  {name:"Paul", bio: "I am fucking Lame as Shit!",image:"paulpicture.jpeg",likes:0}
];
app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
// app.use('/bios', bios);

app.get('/app', function(req, res){
  res.send(peopleList);
  res.sendStatus(200);
});


app.post('/peopleList', function(req, res){
peopleList.likes =
  res.sendStatus(200);
})



console.log('peopleList', peopleList);
console.log('peopleList first index', peopleList[0]);



app.listen(3000);
