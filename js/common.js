$(function() {
//////////   Плавный скролл якорных ссылок     //////////////////
$("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
 });
////////////////////Searching/////////////////////////////
$("#search").on("click", function() {
	alert("                     Hello, nice, that you click on the search! \n                                     Be happy, man!");
});
///////////////   Hover effect for svg image in search in header    ///////////
$("#search").on("mouseover", function() {
	$($(this).find("svg path")).attr("fill", "#00897b");
});
///////////////   Back effect for svg image in search in header    ///////////
$("#search").on("mouseout", function() {
	$($(this).find("svg path")).attr("fill", "#000000");
});
///////////////   Hover effect for svg image in .service    ///////////
$(".service").on("mouseover", function() {
	$($(this).find("svg path")).attr("fill", "#ffffff");
});
///////////////   Back effect for svg image in .service    ///////////
$(".service").on("mouseout", function() {
	$($(this).find("svg path")).attr("fill", "#000000");
});
////////////////// Hover effect for svg image in .member   ////////////
$(".member span").on("mouseover", function() {
	$($(this).find("svg path")).attr("fill", "#ffffff");
});
///////////////   Back effect for svg image in .member    ///////////
$(".member span").on("mouseout", function() {
	$($(this).find("svg path")).attr("fill", "#00897b");
});

});
function showOutSlideMenu(n) {
	var Mnu = $(".outSlideMenu"),
		Content = $(".content"),
		ElementsWidth = $(".outSlideMenu").css("width");
	if (n == 1) {
		Mnu.css("left", "0");
		Content.css("left", "+" + ElementsWidth);
	}
	if (n == 0) {
		Mnu.css("left", "-" + ElementsWidth);
		Content.css("left", "0");
	}
}