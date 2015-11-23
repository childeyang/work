$(document).ready(function(){
	var w=document.body.clientWidth;
	var h=document.body.clientHeight;
	console.log(w,h);

	// var i=0
	// var a=100;
	// var si= setInterval(function(){
	// 	i++;
	// 	$(".yidong").animate({right:i*100+"%"},"slow");
	// 	if (i>=3) {
	// 		i=-1;
	// 	};
	// },2000);

	// if (window.screen.width<=769||w<=769){
	// 		$(".daohang").hide();		
	// 		$(".sm").show();
	// 	};		

			$(window).resize(function(){
				console.log(1);
			if (w<=768) {
				console.log("hahah");
				$(".daohang").hide();
				$(".sm").show();
			}else{
				$(".daohang").show();
				$(".sm").hide();
				$("p").css("margin-top","3%");
			}
			});

			// $(".sp").click(function(){
			// 	$(".bot").slideToggle(800);
			// })
});