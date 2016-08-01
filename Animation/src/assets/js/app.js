(function(){
	'use strict';

	//http://velocityjs.org/
	//to stop animation use $element.velocity("stop")
	//for a custom stop use being "myQueue" a setTimeout function $element.velocity("stop", "myQueue");

	(function arrow() {
	    setInterval(
	    	function(){ 
	    		var arrow = $('.arrow'),
	    			arrowLeft = $('.arrow-left .st5'),
	    			arrowMiddle = $('.arrow-middle .st5'),
	    			arrowRight = $('.arrow-right .st5'),
	    			arrowInactive = {strokeRed: 191, strokeGreen: 208, strokeBlue: 215},
	    			arrowActive = {strokeRed: 149, strokeGreen: 177, strokeBlue: 189};

	    		$(arrowLeft).velocity(arrowActive, {duration: 600})
	    						.velocity("reverse")
	    		$(arrowMiddle).velocity(arrowActive, {duration: 1000})
	    						.velocity("reverse")
	    		$(arrowRight).velocity(arrowActive, {duration: 1400})
	    						.velocity("reverse")
	    	}, 3000);
	}());

	(function certificate() {
		setInterval(
			function () {
				var certificate = $('.certificate'),
					lines = document.querySelectorAll('.certificate .st0'),
					lineActive = {translateX: "0", opacity: 1}, 
					lineInactive = {opacity: 0}, 
					$ease = "ease-in",
					$duration = 800,
					$delay = 200,
					$complete = function() {$(this).velocity({translateX: "-2000px"})};

				
				$(lines[0]).velocity(lineActive,{duration: $duration, delay: $delay})
				
				$(lines[1]).velocity(lineActive,{duration: $duration, delay: $delay*1.5})
				
				$(lines[2]).velocity(lineActive,{duration: $duration, delay: $delay*2})
				
				$(lines[3]).velocity(lineActive,{duration: $duration, delay: $delay*2.5})
				
				$(lines[4]).velocity(lineActive,{duration: $duration, delay: $delay*3})

				$(lines).velocity(lineInactive, {duration: 100, delay: $delay*6})
			}, 6000);
	}());

	(function compass() {
		setInterval(function() {
			var indicator = $('.compass .arrow'),
				$step1 = {translateZ: 0, translateX: "0px",translateY: "0px",rotateZ: "0deg"},
				$step2 = {translateZ: 0, translateX: "39px",translateY: "-24px",rotateZ: "30deg"},
				$step3 = {translateZ: 0, translateX: "25px",translateY: "-18px",rotateZ: "20deg"},
				$duration = 1000;

			indicator
				.velocity($step2,{duration: $duration})
						.velocity($step1,{duration: $duration})
							.velocity($step3,{duration: $duration})
		}, 750);
	}());

	(function read() {
		var pGreen = $('.read .green_man'),
			pWhite = $('.read .man'),
			book = $('.read .book'),
			mark = $('.read .mark'),
			$translate1 = {translateX: "500px"},
			$translate2 = {translateX: "0px", opacity: 1},
			$ease = "ease-out",
			$duration = 3000,
			$delay = 400,
			$complete = function(){mark.velocity({opacity: 1},{duration: $duration,})};


			book.velocity({
				opacity: 1,
			},
			{
				duration: 500,
				easing: $ease,
				delay: 750,
			});
			pGreen.velocity(
				$translate1,
				{
					easing: $ease,
				});
			pGreen.velocity(
				$translate2,
				{
					duration: $duration,
					easing: $ease,
					complete: $complete,
				});
	}());

	(function chart() {
		var upto = document.querySelectorAll('.upto .st8'),
			magn = $('.chart .magnify'),
			$ease = "ease-out",
			$duration = 1000,
			$delay = 800,
			$complete = function() {magn.velocity({ opacity: 1, translateX: "0"},{duration: 400, easing: $ease})};
			
			$(upto[0]).velocity({
				opacity: 1,
			},
			{
				duration: $duration,
				easing: $ease,
			});
			$(upto[1]).velocity({
				opacity: 1,
			},
			{
				delay: $delay,
				duration: $duration*3,
				easing: $ease,
				complete: $complete
			});
	}());

	(function award() {
		var stepCircle = $('.first-circle .st6'),
			stepText = $('.first-circle .st5'),
			stepCircle2 = $('.second-circle .st6'),
			stepText2 = $('.second-circle .st5'),
			stepCircle3 = $('.third-circle .st4'),
			stepText3 = $('.third-circle .st3'),
			strokeInactive = {strokeRed: 149, strokeGreen: 177, strokeBlue: 189},
			fillInactive = "#94B0BC",
			strokeActive = {strokeRed: 63, strokeGreen: 174, strokeBlue: 73},
			fillActive = "#3FAE49",
			$duration = 2000;

			stepCircle
				.velocity(strokeActive,{duration: $duration})
					.velocity("reverse")
			stepText
				.velocity({fill: fillActive},{duration: $duration})
					.velocity("reverse")
			stepCircle2
				.velocity(strokeActive,{duration: $duration, delay: 3000})
					.velocity("reverse")
			stepText2
				.velocity({fill: fillActive},{duration: $duration, delay: 3000})
					.velocity("reverse")
			stepCircle3
				.velocity(strokeActive,{duration: $duration, delay: 4000})
					.velocity("reverse")
			stepText3
				.velocity({fill: fillActive},{duration: $duration, delay: 4000})
					.velocity("reverse");
	}());

}());