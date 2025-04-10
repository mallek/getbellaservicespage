$(document).ready(function(){
    
	// Wait for all images to load before initializing the slider
	$(window).on('load', function() {
		//Homepage Slider
		var options = {
			nextButton: false,
			prevButton: false,
			pagination: true,
			animateStartingFrameIn: true,
			autoPlay: true,
			preloader: false,
			startingFrameID: "sequence",
			pauseOnHover: true,
			reverseWhenNavigatingBackwards: true,
			transitionThreshold: 500,
			hidePreloaderDelay: 0
		};
		
		var mySequence = $("#sequence").sequence(options).data("sequence");

	});

	//Main menu Initialization
	mainMenu.init();

	//Products slider
	var produxtsSlider = $('.products-slider').bxSlider({
		slideWidth: $('.products-slider .shop-item').outerWidth()-20, //Gets slide width
		responsive: true,
		minSlides: 1,
		maxSlides: 4,
		slideMargin: 20,
		auto: true,
		autoHover: true,
		speed: 800,
		pager: true,
		controls: false
	});

	//Make Videos Responsive
	$(".video-wrapper").fitVids();

	//Initialize tooltips
	$('.show-tooltip').tooltip();

	//Contact Us Map
	// create a map in the "map" div, set the view to a given place and zoom
	if ($('#contact-us-map').length > 0) { //Checks if there is a map element
		L.Icon.Default.imagePath = 'assets/images/';
		
		var map = L.map('contact-us-map').setView([39.8475, -104.9814], 15);

		// add an OpenStreetMap tile layer
		L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
			attribution: '&copy; Haley Computer Solutions'
		}).addTo(map);

		// add a marker in the given location, attach some popup content to it and open the popup
		L.marker([39.8475, -104.9814]).addTo(map)
			.bindPopup('Bella Restoration Services. <br> 460 E 76th Ave, Unit A <br> Denver, CO 80229')
			.openPopup();
	}

	$(window).resize(function() {
		$('.col-footer:eq(0), .col-footer:eq(1)').css('height', '');
		var footerColHeight = Math.max($('.col-footer:eq(0)').height(), $('.col-footer:eq(1)').height()) + 'px';
		$('.col-footer:eq(0), .col-footer:eq(1)').css('height', footerColHeight);
	});
	$(window).resize();

});