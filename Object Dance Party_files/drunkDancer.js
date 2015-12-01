/**
 * Created by student on 11/30/15.
 */
var drunkDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 1500);
  this.$node = $('<span class="drunkDancer"> <img src="giphy.gif" height="15%" ></span>');

  var oldStep = this.step;

  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var leftPosition = this.$node.position().left;
    var upPosition = this.$node.position().top;
    var max = 30;
    var min = -30;
    var leftMove = Math.floor(Math.random() * (max-min) + min);
    var topMove = Math.floor(Math.random() * (max-min) + min);
    this.$node.animate({left: leftPosition + leftMove, top: upPosition + topMove }, 600)

  };
};

drunkDancer.prototype = Object.create(makeDancer.prototype);
drunkDancer.prototype.constructor = drunkDancer();