$(document).ready(function() {

	var days = 2;
	var date = new Date();
	var res = date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

	var d = new Date(res);
	var month = d.getMonth() + 1;
	var day = d.getDate();

	var output = (day < 10 ? '0' : '') + day + '.' +
				 (month < 10 ? '0' : '') + month + '.' +
				 d.getFullYear();

	$('#getDate').text(output);
	
	//Init ScrollMagic Controller
	var controller = new ScrollMagic.Controller();

	//Header parallax effect
	var headerBG = new TimelineMax();

	headerBG
		.to("header .bcg", 1, {y:300, ease: Linear.easeNone});

	var headerScene = new ScrollMagic.Scene({
		triggerElement: "#top",
		triggerHook: "0",
		duration: 700
	})
	.setTween(headerBG)
	.addTo(controller);


	//Features img tween

	var imgTween = new TimelineMax();

	imgTween
		.to("#features .img", 3, {y:100, ease: Power1.easeInOut});

	var featuresScene = new ScrollMagic.Scene({
		triggerElement: "#features",
		triggerHook: "0.1"
	})
	.setTween(imgTween)
	.addTo(controller);

	if ($(window).width()<=480){
		headerBG.kill();
		imgTween.kill();
		// portfolio.kill();
	}

});