/* JS for Plugins */

$(document).ready(function(){

	//Page Loader
   $(window).load(function() {
	   $(".loader-item").delay(400).fadeOut();
	   $("#pageloader").delay(400).fadeOut("slow");
   });

	   tag = $.getJSON('https://api.github.com/repos/purduesigbots/pros/releases/latest', function(data) {
	   baseUrl = "https://github.com/purduesigbots/pros/releases/download/" + data.tag_name;
	   anchor = $("#pros2-dl-link");
	   if(navigator.platform.startsWith("Win")) {
		   anchor.attr("href", baseUrl + "/pros-win.exe");
		   anchor.parent().parent().append("<div class=\"text-center\">For Windows. <a href=\"https://github.com/purduesigbots/pros/releases/latest\">Other Platforms</a></div>");
	   }
	   else if(navigator.platform.startsWith("Mac")) {
		   anchor.attr("href", baseUrl + "/pros-macOS.pkg");
		   anchor.parent().parent().append("<div class=\"text-center\">For OS X. <a href=\"https://github.com/purduesigbots/pros/releases/latest\">Other Platforms</a><br/><b>Requires </b><a href=\"https://python.org/downloads\"><b>Python 3.5+</b></a></div>");
	   }
   });
   
	   tag = $.getJSON('https://api.github.com/repos/purduesigbots/pros-cli3/releases/latest', function(data) {
	   baseUrl = "https://github.com/purduesigbots/pros-cli3/releases/download/" + data.tag_name;
	   anchor = $("#pros3-dl-link");
	   var installer_64bit = baseUrl + "/pros-windows-" + data.tag_name + "-64bit.exe";
	   var installer_32bit = baseUrl + "/pros-windows-" + data.tag_name + "-32bit.exe";
	   var request;
		var target_url;
		if(window.XMLHttpRequest)
			request = new XMLHttpRequest();
		else
			request = new ActiveXObject("Microsoft.XMLHTTP");
		// test with 64 bit installer first
		request.open('GET', installer_64bit, false);
		request.send(); // there will be a 'pause' here until the response to come.
		// the object request will be actually modified
		if (request.status === 404) {
			// If there aren't installers, just direct people to the releases page
			installer_64bit = 'https://api.github.com/repos/purduesigbots/pros-cli3/releases';
			installer_32bit = 'https://api.github.com/repos/purduesigbots/pros-cli3/releases';
		}
	   if(navigator.userAgent.indexOf("WOW64") != -1 || 
		  navigator.userAgent.indexOf("Win64") != -1 ) {
		   // 64 Bit Windows
		   anchor.attr("href", installer_64bit);
		   anchor.parent().parent().append("<div class=\"text-center\">For Windows. <a href=\"https://github.com/purduesigbots/pros-cli3/releases/latest\">Other Platforms</a></div>");
	   }
	   else if(navigator.userAgent.indexOf("Win32") != -1 ) {
		   // 32 Bit Windows
		   anchor.attr("href", installer_32bit);
		   anchor.parent().parent().append("<div class=\"text-center\">For Windows. <a href=\"https://github.com/purduesigbots/pros-cli3/releases/latest\">Other Platforms</a></div>");
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

   /* Wow Animation initialisation */
   new WOW().init();

   /* Tabs */
   $('#myTab a').click(function (e) {
	 e.preventDefault()
	 $(this).tab('show')
   })

   /* Provers & Collapse */
   $('.btn_popovers').popover();
});
