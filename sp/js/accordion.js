jQuery(document).ready(function($) {
	$('section.menu-body').hide();
	$('section.menu-title').removeClass('open');

	$('section.menu-title').click(function() {
		$(this).next('section.menu-body').slideToggle();
		$(this).toggleClass('open');
		return false;
	});

	$('a.menu-close-btn').click(function(){
		$(this).parents('section.menu-body').slideUp().prev('section.menu-title').removeClass('open');
		return false;
	});

	$('section.coupon-body').hide();
	$('section.coupon-title').removeClass('open');

	$('section.coupon-title').click(function() {
		$(this).next('section.coupon-body').slideToggle();
		$(this).toggleClass('open');
		return false;
	});

	$('a.coupon-close-btn').click(function(){
		$(this).parents('section.coupon-body').slideUp().prev('section.coupon-title').removeClass('open');
		return false;
	});
});
