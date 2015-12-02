/**
 * Created by student on 11/30/15.
 */
var breakDancer = function (top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, 1500);
  this.$node.removeClass('dancer').addClass("breakDancer");
  this.$node.append('<img src="fluffy.gif" >');

  var oldStep = this.step;

  this.step = function () {
    // call the old version of step at the beginning of any call to this new version of step
    oldStep.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    var leftPosition = this.$node.position().left;
    var upPosition = this.$node.position().top;

    var rotationDirection = 1;

    if( 0.5 <= Math.random() ) rotationDirection = -1;
    this.$node.animate({borderSpacing: rotationDirection * 360}, {
      step: function (now, fx) {
        $(this).css('-webkit-transform', 'rotate(' + now + 'deg)');
        $(this).css('-moz-transform', 'rotate(' + now + 'deg)');
        $(this).css('transform', 'rotate(' + now + 'deg)');
      },
      duration: 1500
    }, 'linear');
  };
};

breakDancer.prototype = Object.create(makeDancer.prototype);
breakDancer.prototype.constructor = breakDancer;