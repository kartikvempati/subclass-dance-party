$(document).ready(function () {
  window.dancers = [];
  var song = new Audio('Avicii - Levels.mp3');
  song.play();
  $(".addDancerButton").on("click", function (event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".button").on("click", function (event) {
    for (var i = 0, dancer; dancer = window.dancers[i]; i++) {
      dancer.moveTo(top, 0);
    }
  });

  $("body").on('mouseover' , '.drunkDancer' , function (event) {
    var pictop = $(this).position().top;
    var picleft = $(this).position().left;
    var picbottom = pictop + 100;
    var picright = picleft + 100;

    var xMid = (picleft + picright)/2;
    var yMid = (pictop + picbottom)/2;
    var enterX = event.clientX;
    var enterY = event.clientY;

    var destX = (xMid + (xMid - enterX) * 2) - 50;
    var destY = (yMid + (yMid - enterY) * 2) - 50;

    $(this).animate({
      "top": destY,
      "left": destX
    }, 200);


  });
});



//" ,.drunkDancer, .breakDancer, .blinkyDancer"
