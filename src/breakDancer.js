/**
 * Created by student on 11/30/15.
 */
var breakDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 1500);

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
    var degrees = Math.random() * 720 -360;
    this.$node.animate({
      '-webkit-transform' : 'rotate('+ degrees +'deg)'
    });

  };
};

breakDancer.prototype = Object.create(makeDancer.prototype);
breakDancer.prototype.constructor = breakDancer;