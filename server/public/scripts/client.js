var likesCounter=0;
var peopleArray = [];

$(document).ready(function(){
  console.log("works");

  $('.fullPeopleContainer').on('click', '.likeButton', function(){
    // likesCounter++;
    console.log("clicked "+ $(this).data('name'));
  });

  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(response){
      peopleArray = response;
      for (var i = 0; i < peopleArray.length; i++) {
        //var fullPerson = nameTest + biosTest + buttonTest + picsTest;
        var name = peopleArray[i].name;
        var bio = peopleArray[i].bio;
        var imageTag = '<img src="/assets/images/' + peopleArray[i].image + '" alt="peopleImage" width="100px" height="100px" />';
        var numberDiv = peopleArray[i].likes;
        var buttonDiv = '<button type="button" class="likeButton" name="button" data-name="'+name+'">Awesome Likes</button>';
        $('.fullPeopleContainer').append( name + " "+ '<br>' + bio + '<br>'+imageTag +'<br>'+ buttonDiv+"  " +numberDiv + '<br>'+ '<br>');

      }
    }//ends success
  });//ends ajax


  // $.ajax({
  //       type: 'POST',
  //       url: '/app',
  //       data: likesCounter,
  //       success: function(response){
  // }
  // }); // end of success



}); // end of document ready
