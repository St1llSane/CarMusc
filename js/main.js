// Big slider
$(document).ready(function(){
  $(".slider-big__inner").owlCarousel({
		items: 3,
		slideBy: 3,
		dots: false,
		margin: 24,
		loop: true,
		mouseDrag: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 300,
	});
});

const first = $('.slider-big__inner');
// Go to the previous item
$('.slider-big__wrapper-btn_prev').click(function() {
	first.trigger('prev.owl.carousel', [300]);
})
// Go to the next item
$('.slider-big__wrapper-btn_next').click(function() {
	first.trigger('next.owl.carousel', [300]);
})

// Small slider
$(document).ready(function(){
  $(".about__slider-inner").owlCarousel({
		items: 1,
		slideBy: 1,
		dots: false,
		loop: true,
		mouseDrag: false,
		autoplay: true,
		autoplayTimeout: 5000,
		autoplaySpeed: 300,
		animateOut: 'fadeOut'
	});
});

const second = $('.about__slider-inner');
// Go to the previous item
$('.about__slider-nav_btn-prev').click(function() {
	second.trigger('prev.owl.carousel', [300]);
})
// Go to the next item
$('.about__slider-nav_btn-next').click(function() {
	second.trigger('next.owl.carousel', [300]);
})

// Services
var mixer = mixitup('.services__content', {
	load: {
		filter: '.category-pasting'
	},
	animation: {
		effectsIn: 'fade translateY(100%)',
		effectsOut: 'fade translateY(100%)',
		duration: 400,
		easing: 'ease'
	}
});

// Burger
document.querySelector('.burger').onclick = function(){
	document.querySelector('.burger').classList.toggle('active');
	document.querySelector('.nav__list-retractable').classList.toggle('active');
}

// Scroll
$('.scrollto a').on('click', function() {

	let href = $(this).attr('href');

	$('html, body').animate({
			scrollTop: $(href).offset().top
	}, {
			duration: 400,   // по умолчанию «400» 
			easing: "linear" // по умолчанию «swing» 
	});

	return false;
});