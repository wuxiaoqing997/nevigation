$(document).ready(function(){
	$("li,a").mouseenter(function(){
		$(".open").removeClass("open");
		$(this,this).addClass("hover");
	});
		
	$("li,a").mouseout(function(){
	$(this,this).removeClass("hover");
	});

	$("li a span").mouseenter(function(){
	$(this).addClass("change");
	});

	$("li a span").mouseout(function(){
	$(this).removeClass("change");
	});
});