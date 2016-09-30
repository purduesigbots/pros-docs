/* JS for Plugins */

$(document).ready(function(){

	 //Page Loader
	$(window).load(function() {
		$(".loader-item").delay(1800).fadeOut();
		$("#pageloader").delay(2200).fadeOut("slow");
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




	/* Partners Block */
	 $(".partner_items").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 5,
		itemsDesktop : [1199,4],
		itemsDesktopSmall : [979,3],
		itemsTablet	: [768,2],
		navigation : false,
		pagination : false
	});

	 /* Testimonials 2 Block */
	 $(".testimonial2_all").owlCarousel({
		autoPlay: 3000, //Set AutoPlay to 3 seconds
		items : 1,
		itemsDesktop : [1199,1],
		itemsDesktopSmall : [979,1],
		itemsTablet	: [768,1],
		navigation : false,
		pagination : false
	});


	/*  MP3 Player */
	$("#jquery_jplayer_1").jPlayer({
        ready: function () {
          $(this).jPlayer("setMedia", {
            title: "Bubble",
            m4a: "http://www.jplayer.org/audio/m4a/Miaow-07-Bubble.m4a",
            oga: "http://www.jplayer.org/audio/ogg/Miaow-07-Bubble.ogg"
          });
        },
        swfPath: "/js",
        supplied: "m4a, oga"
    });

	var t = $(".blog_content_mp3").width();
    $(".jp-progress").css({
        width: t - 250
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


	/* Pretty Photo */
	$("a[rel^='prettyPhoto']").prettyPhoto({
		animationSpeed: 'fast',
		opacity: 0.7,
		social_tools: "",
		deeplinking: false
	});



	/* Video Player */
	$(".player").mb_YTPlayer();


	// validate and process contact form
	$(".contact_btn").click(function() {

		var name = $("input#name").val();
		var email = $("input#email").val();
		var message = $("textarea#message").val();
		var dataString = 'name='+ name + '&email=' + email + '&message=' + message;

		//alert (dataString);//return false;
		$.ajax({
		  type: "POST",
		  url: "mailer.php",
		  data: dataString,
		  success: function() {
			$('.contact_form').html("<div class='contact_message text_color'>Contact Form Submitted!</div>");

		  }
		});
		return false;

	});


	 // Action Subscribe
	$(".action_btn").click(function() {

		var subscribe = $("input#subscribe").val();

		//alert (subscribe);//return false;
		$.ajax({
		  type: "POST",
		  url: "subscribe.php",
		  data: subscribe,
		  data: {'subscribe': subscribe},
		  success: function() {
			$('.subscribe_form').html("<div class='subscribe_message text_color'> <i class='fa fa-check'></i>You are Subscribed</div>");

		  }
		});
		return false;

	});

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
