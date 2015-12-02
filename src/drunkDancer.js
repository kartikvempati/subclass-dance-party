/**
 * Created by student on 11/30/15.
 */
var drunkDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 1500);
  this.$node.removeClass('dancer').addClass("drunkDancer");
  this.$node.append('<img src="giphy.gif" >');
  this.dead = false;

  var oldStep = this.step;

  this.step = function () {
    if (this.dead === false) {
      // call the old version of step at the beginning of any call to this new version of step
      oldStep.call(this);
      // toggle() is a jQuery method to show/hide the <span> tag.
      // See http://api.jquery.com/category/effects/ for this and
      // other effects you can use on a jQuery-wrapped html tag.
      var leftPosition = this.$node.position().left;
      var topPosition = this.$node.position().top;
      var max = 30;
      var min = -30;
      var leftMove = Math.floor(Math.random() * (max - min) + min);
      var topMove = Math.floor(Math.random() * (max - min) + min);
      for (var i = 0, dancer; dancer = window.dancers[i]; i++) {
        var neighborLeft = dancer.$node.position().left;
        var neighborTop = dancer.$node.position().top;
        var newLeft = leftPosition + leftMove;
        var newTop = topPosition + topMove;
        var distance = Math.sqrt(Math.pow(newLeft - neighborLeft, 2) + Math.pow(newTop - neighborTop, 2));
        if (distance < Math.sqrt(Math.pow(100, 2) * 2) && distance > -Math.sqrt(Math.pow(100, 2) * 2)) {
          if (this.$node !== dancer.$node) {
            this.dead = true;
            this.$node.animate({borderSpacing: -90}, {
              step: function (now, fx) {
                $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
                $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
                $(this).css('transform', 'rotate(' + now + 'deg)');
              },
              duration: 400
            }, 'linear');

            this.$node.children().attr('src', 'deadshark.png');
          }
        }

      }

      if(this.dead === false){
        this.$node.animate({left: leftPosition + leftMove, top: topPosition + topMove}, 600);
      }
    }
  };
};

drunkDancer.prototype = Object.create(makeDancer.prototype);
drunkDancer.prototype.constructor = drunkDancer();