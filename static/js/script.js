/* JS for Plugins */

$(document).ready(function(){

	 //Page Loader
	$(window).load(function() {
		$(".loader-item").delay(800).fadeOut();
		$("#pageloader").delay(1200).fadeOut("slow");
	});

		tag = $.getJSON('https://api.github.com/repos/purduesigbots/pros/releases/latest', function(data) {
		baseUrl = "https://github.com/purduesigbots/pros/releases/download/" + data.tag_name;
		anchor = $("#pros-dl-link");
		if(navigator.platform.startsWith("Win")) {
			anchor.attr("href", baseUrl + "/pros-win.exe");
			anchor.parent().parent().append("<div class=\"text-center\">For Windows. <a href=\"https://github.com/purduesigbots/pros/releases/latest\">Other Platforms</a></div>");
		}
		else if(navigator.platform.startsWith("Mac")) {
			anchor.attr("href", baseUrl + "/pros-macOS.pkg");
			anchor.parent().parent().append("<div class=\"text-center\">For OS X. <a href=\"https://github.com/purduesigbots/pros/releases/latest\">Other Platforms</a></div>");
		}
	});


	/* Link Transition */
	$("a.linkz_transition").click(function(event){
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(700, redirectPage);
    });
    function redirectPage() {
        window.location = linkLocation;
    }


	/* Nice Scroll */
	$("html").niceScroll({
		cursorwidth: '10px',
		scrollspeed: '60',
		mousescrollstep: '45'
	});

	$('.fullbg_smalltxt a').niceScroll();

	/* Full Backgrounf Slider */
	$('#slides_background').superslides({
      animation: 'fade',
      play: 5000
    });

    $('#slides_background_home').superslides();

    /* Home Slider text Slide */
    $('.fullbg_bigtxt_slider').bxSlider({
	  mode: 'vertical',
	  pager: false,
	  auto: true,
	  controls: false
	});

	/* Skill Progress bar */
	$(".skill_block").appear(function () {
		$(this).each(function(){
			$(this).find('.skill_bar').animate({
				width:$(this).attr('data-percent')
			},3000);
		});
	});

	/* Radial Chart for Skills */
	$('#skills').appear(function() {
		var easy_pie_chart = {};
		var piecolor = $('.text_color').css( "color" );
		$('.circular-item').removeClass("hidden");
		$('.circular-pie').each(function() {
			var text_span = $(this).children('span');
			$(this).easyPieChart($.extend(true, {}, easy_pie_chart, {
				size : 200,
				animate : 3000,
				lineCap : 'square',
				barColor : piecolor,
				lineWidth : 10,
				trackColor : '#efefef',
				scaleColor : false,
				onStep : function(value) {
					text_span.text(parseInt(value, 10) + '%');
				}
			}));
		});
	});




	/* Portfolio Isotop */
 	var $container = $('.portfolio_items');
	$container.imagesLoaded( function() {
		$container.isotope({
			itemSelector : '.portfolio_item',
			layoutMode : 'fitRows',
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
    });

    $('.portfolio_navigation a').click(function(){
        $('.portfolio_navigation .active').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 250,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });



    /* Our Company Section */
    $('.company_btn1').hover(function(){
    	$('.company_prg1').addClass("opaque");
    	$('.company_prg2').removeClass("opaque");
    	$('.company_prg3').removeClass("opaque");
    	$('.company_prg4').removeClass("opaque");
    });
    $('.company_btn2').hover(function(){
    	$('.company_prg1').removeClass("opaque");
    	$('.company_prg2').addClass("opaque");
    	$('.company_prg3').removeClass("opaque");
    	$('.company_prg4').removeClass("opaque");
    });
    $('.company_btn3').hover(function(){
    	$('.company_prg1').removeClass("opaque");
    	$('.company_prg2').removeClass("opaque");
    	$('.company_prg3').addClass("opaque");
    	$('.company_prg4').removeClass("opaque");
    });
    $('.company_btn4').hover(function(){
    	$('.company_prg1').removeClass("opaque");
    	$('.company_prg2').removeClass("opaque");
    	$('.company_prg3').removeClass("opaque");
    	$('.company_prg4').addClass("opaque");
    });



    /* About US 2 Section */
    $('.ab3pgs2').hide();
    $('.ab3pgs3').hide();
    $('.ab3tn1').click(function(){
    	$(this).addClass('current');
    	$('.ab3tn2').removeClass('current');
    	$('.ab3tn3').removeClass('current');
    	$('.ab3pgs2').slideUp();
    	$('.ab3pgs3').slideUp();
    	$('.ab3pgs1').slideDown();
    });

    $('.ab3tn2').click(function(){
    	$(this).addClass('current');
    	$('.ab3tn1').removeClass('current');
    	$('.ab3tn3').removeClass('current');
    	$('.ab3pgs1').slideUp();
    	$('.ab3pgs3').slideUp();
    	$('.ab3pgs2').slideDown();
    });

    $('.ab3tn3').click(function(){
    	$(this).addClass('current');
    	$('.ab3tn2').removeClass('current');
    	$('.ab3tn1').removeClass('current');
    	$('.ab3pgs2').slideUp();
    	$('.ab3pgs1').slideUp();
    	$('.ab3pgs3').slideDown();
    });




    /* Team Overlay */
    /* Variables */
	var AnimEnd = 'animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oAnimationEnd';
	var nav = $('.team_content');
	var navButton = $('.team_img_block');
	var overlay = $('.overlay');

	/* On menu button click event */
	$(navButton).click(function(event){

	    /* This conditional statement is here to prevent
	    clicks on inactive buttons on IE10, as pointer-events
	    cannot be applied on non-SVG elements */

	    if ($(this).hasClass("active_reverse")) {

	        event.preventDefault();

	    } else {

	        /* Remove old previous classes */
	        $(navButton).removeClass('inactive active');
	        //$(nav).removeClass('fx-box_rotate fx-box_rotate_reverse');
	        $(overlay).removeClass('active active_reverse');

	        /* Add classes on defined elements */
	        $(this).siblings('.team_img_block').addClass('inactive');
	        $(this).addClass('inactive');

	        /* Activate related overlay */
	        var o_target = $(this).data('id');
	        $('#'+o_target).addClass('active');

	        /* Prevent scrolling
	        $("body").addClass('noscroll');*/

	    }

	});


	/* On close button click event */
	$(".close").click(function(){

	    /* Add *_reverse classes */
	    //$('.active', nav).removeClass('active').addClass('active_reverse');
	    //$('.inactive', nav).addClass('inactive_reverse');
	    $(navButton).addClass('active');
	    $(this).parent().addClass('active_reverse');

	    /* Remove .noscroll and .inactive when animation is finished */
	    $('.active_reverse').bind(AnimEnd, function(){

	        //$('body').removeClass('noscroll');
	        $(overlay).removeClass('active active_reverse');
	        $(navButton).removeClass('active inactive');
	        $('.active_reverse').unbind(AnimEnd);

	    });

	});

	/* Count To */
	$(".skills_content_nmbr").appear(function(){
		$('.skills_content_nmbr').each(function(){
	        dataperc = $(this).attr('data-perc'),
			$(this).find('.factor').delay(6000).countTo({
	            from: 0,
	            to: dataperc,
	            speed: 1000,
	            refreshInterval: 5,

        	});
		});
	});
	$(".static_content").appear(function(){
		$('.static_number').each(function(){
	        dataperc = $(this).attr('data-perc'),
			$(this).find('.factor').delay(6000).countTo({
	            from: 0,
	            to: dataperc,
	            speed: 1000,
	            refreshInterval: 5,

        	});
		});
	});

	/* Sticky menu */
	$(".navsticky").sticky({
		topSpacing:0,
		//className: 'navopacity'
	});



	/* One Page Navigation */
	$('.nav').onePageNav({
	    currentClass: 'current',
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing',
	    begin: function() {
	        //I get fired when the animation is starting
	    },
	    end: function() {
	        //I get fired when the animation is ending
	    },
	    scrollChange: function($currentListItem) {
	        //I get fired when you enter a section and I pass the list item of the section
	    }
	});
	$('.fullbg_btn').onePageNav({
	    changeHash: false,
	    scrollSpeed: 750,
	    scrollThreshold: 0.5,
	    filter: '',
	    easing: 'swing'
	});


	$('ul.nav li.dropdown').hover(function () {
			$(this).find('.dropdown-menu').stop(true, true);
			$(this).addClass('open');
		}, function () {
			$(this).find('.dropdown-menu').stop(true, true);
			$(this).removeClass('open');
	});

	enquire.register("screen and (min-width:992px)", {
		 match : function() {

			$('ul.nav li.dropdown').hover(function () {
					$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn();
				}, function () {
					$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut();
			});
	    },
	    unmatch : function() {


	    }

	});




	/* bxslider for project 5*/
	$('.bxslider').bxSlider({
	  pagerCustom: '#bx-pager'
	});
	$('.bx-viewport').css("position","static");

	/* Wow Animation initialisation */
	new WOW().init();


	/* Tabs */
	$('#myTab a').click(function (e) {
	  e.preventDefault()
	  $(this).tab('show')
	})


	/* Provers & Collapse */
	$('.btn_popovers').popover();
	/*$('.collapse').collapse({
		parent:true}
	);*/
});
