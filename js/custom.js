//////////////////////////////////////////////////////////////////////////////////////////
//Nav
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
    jQuery('a.scroll-link').click(function(){
        jQuery.scrollTo( $(this).attr("href"), {
			duration: 1000,
			easing:'easeInOutExpo'			
		});
		return false;
    });
});


/*
var jump=function(e)
{
   if (e){
       e.preventDefault();
       var target = $(this).attr("href");
   }else{
       var target = location.hash;
   }

   $('html,body').animate(
   {
       scrollTop: $(target).offset().top 
	}, 1, function() { location.hash = target; }
	
	);

}

$(document).ready(function()
{
    $('a[href^=#]').bind("click", jump);

    if (location.hash){
        setTimeout(function(){
            $('html, body').scrollTop(0).show();
            jump();
        }, 0);
    }
});
*/

//////////////////////////////////////////////////////////////////////////////////////////
//Scrolling
//////////////////////////////////////////////////////////////////////////////////////////
/*
jQuery(document).ready(function ($){
	jQuery('.waypoint-1').waypoint(function() {
	  jQuery(".hidden-element-1").addClass("visible-element");
	}, { offset: '75%' });

	jQuery('.waypoint-2').waypoint(function() {
	  jQuery(".hidden-element-2").addClass("visible-element");
	}, { offset: '75%' });
	
	jQuery('.waypoint-3').waypoint(function() {
	  jQuery(".hidden-element-3").addClass("visible-element");
	}, { offset: '75%' });
	
	jQuery('.waypoint-4').waypoint(function() {
	  jQuery(".hidden-element-4").addClass("visible-element");
	  jQuery('.percentage').easyPieChart({
	      barColor: '#52bad5',
	      trackColor: '#f3f6f8',
	      scaleColor: false,
	      lineCap: 'butt',
	      rotate: -90,
	      lineWidth: 5,
	      animate: 3000,
	      onStep: function(value) {
	          this.$el.find('span').text(~~value);
	      }
	  });
	}, { offset: '75%' });
});
*/
//////////////////////////////////////////////////////////////////////////////////////////
//iLightbox settings for team full profile
//////////////////////////////////////////////////////////////////////////////////////////
/*
jQuery(document).ready(function ($){
	$('.ilightbox-member-1').iLightBox({
		skin: 'dark',
		path: 'vertical'
	});
	$('.ilightbox-member-2').iLightBox({
		skin: 'dark',
		path: 'vertical'
	});
	$('.ilightbox-member-3').iLightBox({
		skin: 'dark',
		path: 'vertical'
	});
	$('.ilightbox-member-4').iLightBox({
		skin: 'dark',
		path: 'vertical'
	});
});
*/

//////////////////////////////////////////////////////////////////////////////////////////
//Detect iPhone, iPod, iPad and remove or activate parallax
//////////////////////////////////////////////////////////////////////////////////////////
var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
//////////////////////////////////////////////////////////////////////////////////////////
//Detect ie version
//////////////////////////////////////////////////////////////////////////////////////////
function detectIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    if (trident > 0) {
        // IE 11 (or newer) => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    // other browser
    return false;
}
//////////////////////////////////////////////////////////////////////////////////////////
//iLightbox settings for the portfolio
//////////////////////////////////////////////////////////////////////////////////////////

detectMobile = isMobile.any();

if ((detectMobile == null)) {
	
	//alert("not mobile");
	
	if ($(window).width() > 1024) {
		
		//alert($(window).width());
	
		//if ((detectIE() > 8)) {
			
	
			$('.portfolio-thumb').iLightBox({
				skin: 'dark',
				innerToolbar: false,
				infinite: false,
				thumbnail: false,
				overlay: {
					opacity: 0.9,
					blur: false
				},
				controls: {
					thumbnail: false,
					swipe: false,			
					fullscreen: false,
					slideshow: false,
					arrows: false,
					mousewheel: false,
					keyboard: false
				},
				styles: {
					nextOffsetX: -999,
					prevOffsetX: -999
				}
				});
		//}
	}
} 

/*
jQuery(document).ready(function ($){
	jQuery('.portfolio-thumb').on('click',function(){
			//alert(jQuery('.portfolio-thumb').attr('href'));
			var addressValue = this.href;
			//var addressValue = this.hash;
			//alert(addressValue);
	})
});
*/

//////////////////////////////////////////////////////////////////////////////////////////
//Isotope portfolio
//////////////////////////////////////////////////////////////////////////////////////////
/*
var $container = $('#portfolio-list');
$container.imagesLoaded( function(){
	$container.isotope({
		itemSelector : '.block',
		layoutMode : 'fitRows'
	});
});
*/


/*
//filter items when filter link is clicked
jQuery('#portfolio-filter a').click(function(){
	var selector = $(this).attr('data-filter');
	$container.isotope({ filter: selector });
	jQuery(this).parents('ul').find('li').removeClass('active');
	jQuery(this).parent().addClass('active');
		return false;
});
*/




$(window).bind('load', function () {
	//parallaxInit();	
	//alert('IE ' + detectIE());
});

function parallaxInit() {
	detectMobile = isMobile.any();
	if (detectMobile == null) {
		if (detectIE() == false) {
			$('.bg2').parallax("50%", 0.5);
			$('.bg3').parallax("50%", 0.5);
			$('.bg4').parallax("50%", 0.5);
			$('.bg5').parallax("50%", 0.5);
			$('.bg6').parallax("50%", 0.5);
			$('.bg7').parallax("50%", 0.5);
		} else {
			//IE detected
			if (detectIE() > 7) {
				$('.bg2').parallax("50%", 0.5);
				$('.bg3').parallax("50%", 0.5);
				$('.bg4').parallax("50%", 0.5);			
				$('.bg5').parallax("50%", 0.5);				
				$('.bg6').parallax("50%", 0.5);				
				$('.bg7').parallax("50%", 0.5);
				
			}
		}
			
	}
}

//////////////////////////////////////////////////////////////////////////////////////////
//Hide menu after click on mobile 
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
	jQuery('.nav li a.scroll-link').on('click',function(){
	    jQuery('.nav-collapse').collapse('hide');
	})
});



//////////////////////////////////////////////////////////////////////////////////////////
//Homepage slider
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
	$('.flexslider').flexslider({
    	animation: "swing",
		direction: "horizontal", 
		slideshow: true,
		slideshowSpeed: 20000,
		animationDuration: 3000,
		directionNav: true,
		controlNav: true,
		useCSS: false
	});
});

//set the slider to go to first slide when home is clicked
jQuery(document).ready(function ($){
	jQuery('.nav li a.reset-slider').on('click',function(){
	    $('.flexslider').flexslider(0);
	})
});

//////////////////////////////////////////////////////////////////////////////////////////
//Trick for validate the rel attribute
//////////////////////////////////////////////////////////////////////////////////////////
jQuery(document).ready(function ($){
	$('a[data-rel]').each(function() {
	    $(this).attr('rel', $(this).data('rel'));
	});
});  
//////////////////////////////////////////////////////////////////////////////////////////
//jPreloader settings
//////////////////////////////////////////////////////////////////////////////////////////
$(document).ready(function() {
	$('body').jpreLoader({
  		loaderVPos: "50%",
  		splashFunction: function() {
  			jQuery("body").addClass("visible-body");
  			jQuery("body").removeClass("hidden-body");
  		}
    });
});     