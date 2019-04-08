// Begin XHTML adjustment
$(document).ready(function(){
	if (jQuery.browser.msie && jQuery.browser.version.substr(0, 2) == "6.") {
		$(".nof-clearfix").each(function (i) {
			$(this).append("<div style='clear:both'/>");
			$(this).removeClass("nof-clearfix");
		});
	}
});

// End XHTML adjustment

// Begin Navigation Bars
var ButtonsImageMapping = [];
ButtonsImageMapping["NavigationBar1"] = {
	"NavigationButton1" : { image: "./Acasa_Hp_highlighted.png", rollover: "./Acasa_HRp_highlightedOver.png", w: 110, h: 35 },
	"NavigationButton2" : { image: "./Film_Np_regular.png", rollover: "./Film_NRp_regularOver.png", w: 110, h: 35 },
	"NavigationButton3" : { image: "./Test-online_Np_regular.png", rollover: "./Test-online_NRp_regularOver.png", w: 110, h: 35 },
	"NavigationButton4" : { image: "./Rebusuri_Np_regular.png", rollover: "./Rebusuri_NRp_regularOver.png", w: 110, h: 35 },
	"NavigationButton5" : { image: "./Galerie-foto_Np_regular.png", rollover: "./Galerie-foto_NRp_regularOver.png", w: 110, h: 35 }
};

$(document).ready(function(){
	$.fn.nofNavBarOptions({ navBarId: "NavigationBar1", rollover: true, autoClose: true });
	$("#NavigationBar1").nofNavBar({isMain: true, orientation: "horizontal" });
	$("#NavigationBar1 ul").hide();
});


// End Navigation Bars

