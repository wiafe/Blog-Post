$(document).ready(function() {
	$('a.arrows').hover(function() {
		$('.overlay').fadeToggle('.show-overlay');
	});

	$('.hold > p').click(function() {
		$(this).addClass('active');
		$(this).siblings().removeClass('active');
	});

	var scrol_pos = $("aside").scrollTop();
	console.log(scrol_pos);
});