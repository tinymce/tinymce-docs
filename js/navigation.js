$(document).ready(function(){
	var items = $('.navigationlink');

	function clickEvent(event) {
		$('html, body').animate({
			scrollTop: $('#' + event.data).offset().top + 70
		}, 2000);
	}

	for (var i = 0; i < items.length; i++) {
		var selector = $(items[i]).attr('data-id');
		$(items[i]).click(selector, clickEvent);
	}
});