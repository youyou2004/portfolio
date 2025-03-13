/*******************************************************
    Template Name    : Omni - IT Solutions & Business Services Landing Page Template
    Author           : Cute Themes
    Version          : 1.0
    Created          : 2023
********************************************************/

(function ($) {
	"use strict";
	var wind = $(window);
	// Var Background image
	var pageSection = $(".bg-img, section");
	pageSection.each(function (indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});
    // Header Sticky
	$(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });
	//  Star Scrolling nav
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	// Back to top button 
	$(function () {
		// Scroll Event
		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.back-to-top').addClass('active');
			if (scrolled < 300) $('.back-to-top').removeClass('active');
		});
		// Click Event
		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 500);
		});
	});
	// Testimonials owl
	$('#testimonial-slide').owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 800,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1000: {
				items: 3
			}
		}
	});
	// Partner Logo Slide owlCarousel
	$('#partner-slide').owlCarousel({
		loop: true,
		margin: 0,
		mouseDrag: true,
		autoplay: true,
		dots: false,
		fullscreen: false,
		smartSpeed: 800,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 5
			}
		}
	});
	//  Star Counter
	$('.counter-number').counterUp({
		delay: 15,
		time: 2000
	});
	//  Accordion faq
	$(".accordion").on("click", ".title", function () {
		$(this).next().slideDown();
		$(".accordion-info").not($(this).next()).slideUp();
	});
	$(".accordion").on("click", ".accordion-item", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	//  POPUP VIDEO
	$('.popup-video').magnificPopup({
		type: 'iframe',
	});
	// Tab underline effect
	$(".underline").on("click", ".nav-item", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	// Progress bar
	wind.on('scroll', function () {
		$(".skill-progress .progres").each(function () {
			var bottom_of_object = $(this).offset().top + $(this).outerHeight();
			var bottom_of_window = $(window).scrollTop() + $(window).height();
			var myVal = $(this).attr('data-value');
			if (bottom_of_window > bottom_of_object) {
				$(this).css({
					width: myVal
				});
			}
		});
	});
	// MagnificPopup 
	$('.project-container').magnificPopup({
		delegate: '.popimg',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	// Porfolio isotope and filter
	$(window).on('load', function () {
		var projectIsotope = $('.project-container').isotope({
			itemSelector: '.project-grid-item'
		});
		$('#project-flters li').on('click', function () {
			$("#project-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');
			projectIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});
	// WOW JS
	$(window).on('load', function () {
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: 'wow', // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset: 30, // Distance to the element when triggering the animation (default is 0)
				mobile: false, // Trigger animations on mobile devices (default is true)
				live: true, // Act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
	});
	// START PRELOADED
	$(window).on('load', function () {
		$('.preloader').fadeOut();
		$('.preloader').delay(350).fadeOut('slow');
	});
})(jQuery);