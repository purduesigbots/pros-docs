$(document).ready(function(){
	/* Blog Masonry 2 Columns*/
 	var $M2container = $('.blog-content2c');
	$M2container.imagesLoaded( function() {
		$M2container.isotope({
			itemSelector : '.blog-post2c',
			layoutMode : 'masonry',
			animationOptions: {
				duration: 750,
				easing: 'linear'
			}
		});
    });
});