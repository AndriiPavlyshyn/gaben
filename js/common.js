$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};
/*
	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
*/
	$('.home-slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		fade: true,
		asNavFor: '.home-slider-nav'
	});
	$('.home-slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.home-slider-for',
		draggable: false,
		dots: false,
		centerMode: true,
		focusOnSelect: true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
			}
		}
		]
	});


	$('.partners-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		centerMode: true,
		variableWidth: true,
		infinite: true
	});





});



// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("backToTop").style.display = "block";
    } else {
        document.getElementById("backToTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

 function topFunction() {
    var scrollToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if ( pos > 0 ) {
            window.scrollTo( 0, pos - 20 );
        } else {
            window.clearInterval( scrollToTop );
        }
    }, 16);
}

/* Chat */

(function() {


	$('.top').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').toggleClass('active')

	});


	$('.toggler').click(function(){
		$('.now-bye').toggleClass('active');
		$('.sidebar-games-item').toggleClass('active');
		$('.c-hamburger').toggleClass('active');
	})

}) ();

$(document).ready(function() {

	
 		$('select').niceSelect();
	


    $(function(){
	  // hide all content
	  $('.accordeon .accordeon_content').hide();
	  
	  $('.accordeon .accordeon_title').click(function(){
	    
	    $('.accordeon .accordeon_content').slideUp();
	    
	    if(!$(this).next().is(":visible")) {
			$(this).next().slideDown();
		}
	  });
	});


    /*Custom Scroll Bar*/

	$(".nano").nanoScroller();


  
	/* Tabs */


    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });



    /*If payment type is one, add class to vertical align this item*/

	$('.payment-type .nano-content').each(function () {
	    var paymentTypeCount = $(this).children().length;

	    if (paymentTypeCount == 1 ) {
			$(this).children().children().addClass('solo');
	    }

	});

    


});


