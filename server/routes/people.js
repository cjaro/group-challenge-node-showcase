var express = require("express");
var router = express.Router();
var theNerdHerd = require('./theNerdHerd.js');

router.get('/',function(req,res){
 res.send(theNerdHerd);
 res.sendStatus(200);
});
//
//
// router.get('/likes',function(req,res){
//  var likeCount = (theNerdHerd[0].likes);
//  res.send(likeCount);
//
// });
//
// router.post('/addLikes',function(req,res){
//  var newLikeValue = req.body;
// //in the client set build a temporary array:
// //[the person's place in the array,the new value], so the req.body would be:
// //
// //then we parse this array and do something likes
// var updateThisPerson = req.body[0];
//  var newLikeValue = req.body[1]
//  theNerdHerd[updateThisPeson].likes = newLikeValue;
//
//  theNerdHerd[x].like += incrementLikeBy
// });

module.exports = router;
