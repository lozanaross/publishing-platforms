jQuery(document).ready(function($) {
	
	$("#contents-table").hover(function () {
    	$("#home-content").fadeToggle(200);
 	});
	
    $("#contents-table a").mouseover(function () {
	    var divID = $(this).attr("data-id");
	    $(divID).fadeOut(200,
		    function() {
			    $(divID).fadeIn(200); 
		    }
	    );
 	});

});