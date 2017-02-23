var likesCounter=0;
$(document).ready(function(){
console.log("works");


  $.ajax({
        type: 'GET',
        url: '/app',
        success: function(response){
          var peopleArray = response;
          for (var i = 0; i < peopleArray.length; i++) {
            var nameDiv = peopleArray[i].name;
            var bioDiv = peopleArray[i].bio;
            var imageDiv = peopleArray[i].image;
            var numberLikes = peopleArray[i].likes;
            $('.name').append('<ul>' + nameDiv + '<br>' + bioDiv +  '<br>' + '<div>' +imageDiv +'</div>'+ '<div>' + numberLikes + '</div>'+'</ul>');
            $('.dynamicButton').append('<button type="button" id="likeButton" name="button" data-name="'+nameDiv+'">dynamic likes</button>');
            $('.pagePics').append('<img src="/assets/images/' + peopleArray[i].image + '" alt="peopleImage" width="100px" height="100px" />');

          }
}
});

$('#likeButton').on('click', function(){
// likesCounter++;
console.log("clicked"+ $(this).data('name'));
});
// $.ajax({
//       type: 'POST',
//       url: '/app',
//       data: likesCounter,
//       success: function(response){
// }
// }); // end of success



}); // end of document ready
