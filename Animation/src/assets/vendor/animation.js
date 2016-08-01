(function(){
	'use strict';
  
  var arrow = $('.arrow'),
      arrowLeft = $('.arrow .left'),
      arrowMiddle = $('.arrow .middle'),
      arrowRight = $('.arrow .right'),
      arrowInactive = {strokeRed: 191, strokeGreen: 208, strokeBlue: 215},
      arrowActive = {strokeRed: 149, strokeGreen: 177, strokeBlue: 189},
      $ease = "ease-in",
      $duration = 1000,
      $delay = 2000,
      $delayEnd = 500,
      $complete = function() { 
        $(this).velocity(
          arrowInactive,
          {
            delay: $delayEnd,
            duration: $duration,
            easing: $ease
          })
      };


  // basics
    // $element.velocity({
    //     width: "500px",
    //     property2: value2
    // }, {
    //     /* Velocity's default options */
    //     duration: 400,
    //     easing: "swing",
    //     queue: "",
    //     begin: undefined,
    //     progress: undefined,
    //     complete: undefined,
    //     display: undefined,
    //     visibility: undefined,
    //     loop: false,
    //     delay: false,
    //     mobileHA: true
    // });


  arrowLeft.velocity(
    arrowActive,
    { 
      duration: $duration,
      easing: $ease,
      complete: $complete,
    });

  arrowMiddle.velocity(
    arrowActive,
    {
      delay: $delay,
      duration: $duration,
      easing: $ease,
      complete: $complete,
    });

  arrowRight.velocity(
    arrowActive,
    {
      delay: $delay*2,
      duration: $duration,
      easing: $ease,
      complete: $complete 
    });        
// end function
}());