//We want the main title at index.html to show up sliding down

//First we make it hide by default
$(".headerhome h1").hide();
$(".headerhome h2").hide();
$(".arrow").hide();
//Then we have it show up slowly
$(".headerhome h1").fadeIn(2000, function() {
	$(".headerhome h2").slideDown("slow", function() {
		$(".arrow").slideDown("slow");
	});
});

//******************


//JQuery for dropdown menu
	//First we add the class .js, that hides the .nav
	//We also
	$(".nav").addClass("js").before('<div class="dropdown">&#9776;</div>');
	//$(".title").after

	//Then we give the 3bar menu the ability to hide and show the menu
	$(".dropdown").click(function() {
		$(".nav").toggle();
	});

	//Navigation is always hidden because toggle() adds style attribute
	//to the navigation element
	$(window).resize(function() {
		if(window.innerWidth > 537) {
			$(".nav").removeAttr("style");
		}
	});


//Sticky plugin

//$(".headersmall").sticky({topSpacing: 0});

	//Override plugin for mobile
	//$(window).resize(function () {
		//if (window.innerWidth < 536) {
		//	$("div").removeClass("sticky-wrapper is-sticky")
		//};
	//});



//Slick plugin

$('.carousel').slick({
	arrows: false,
	dots: true
});

