


$(document).ready(function(){
   // jQuery methods go here...
	$("button.accordion").click(function(){
		this.toggleClass("button.accordion.active");
		if($("div.panel").css("display") === "block"){
			$("div.panel").css({"display":"none"});
		} else {
			$("div.panel").css({"display":"block"});
		}
		
		});
	}); 
