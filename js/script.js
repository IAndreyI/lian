$(document).ready(function() {
	$('.skills_input').each(function(){
		var this_input = $(this);
		var val = this_input.val();
		this_input.next().html(val+'%');
		this_input.css({'background':'-webkit-linear-gradient(left ,#a1a1a1 0%,#a1a1a1 '+val+'%,transparent '+val+'%, transparent 100%)'});
		this_input.next().css('left',val+'%');
		
	})
	let card_img = $('.team_cards__card img');
	let min_height = card_img.height();
	setMinHeight(card_img,min_height);
});
function setMinHeight(card_img,min_height){
	card_img.each(function(){
		if ($(this).height() < min_height) {
			min_height = $(this).height();
		}
	});
	card_img.css('max-height',min_height+'px');
}
$(window).on("resize", function() {
	let card_img = $('.team_cards__card img');
	let min_height = card_img.height();
	console.log(min_height);
	setMinHeight(card_img,min_height);
});

$('.skills_input').on('input',function(){
	var val = $(this).val();
	$(this).css({'background':'-webkit-linear-gradient(left ,#a1a1a1 0%,#a1a1a1 '+val+'%,transparent '+val+'%, transparent 100%)'});
	$(this).next().html(val+'%');
	$(this).next().css('left',val+'%');
	val = 0;
});
