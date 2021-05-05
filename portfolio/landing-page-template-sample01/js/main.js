//Navbar AddOnBackground => only applied when the user scroll down
$(window).scroll(function(){
    if($(".navbar").offset().top > 50){
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    }else{
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//Scrolling Effect
$(function(){
	$('.page-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({ //Stop the current running animation
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');

		event.preventDefault(); //Prevent from doing that thing
	});
});
