$(document).ready(function(){
	/* Blog Masonry */
 	var $mcontainer = $('.blog-content');
	$mcontainer.imagesLoaded( function() {
		$mcontainer.isotope({
			itemSelector : '.blog-post',
			layoutMode : 'masonry',
			animationOptions: {
				duration: 750,
				easing: 'linear'
			}
		});
    });
});