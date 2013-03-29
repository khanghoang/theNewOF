// $(document).ready(function(){
// 	var offset = 0;
// 	$(window).bind('mousewheel', function(event) {
// 	    if (event.originalEvent.wheelDelta >= 0) {
// 	    	direction = "up";		    	
// 	        // console.log('Scroll up');			        
// 	    }
// 	    else {
// 	    	direction = "down";
// 	        // console.log('Scroll down');			        
// 	    }	    

// 	    $(".inside-banner").each(function(index){
// 			if (!inWindowView($(this))) return;
// 			offset = $(window).scrollTop() - offset;
// 	    	console.log("difference = " + offset);
// 			// console.log( "Guy " + index + " , inWindowView = " + inWindowView($(this))); 	    	
// 			// moveAround($(this), direction);
// 			moveAround($(this), offset);
// 			offset = $(window).scrollTop();
// 		}) 	    
// 	});						
// })

$(window).bind('mousewheel', function(event) {
	console.log(event.originalEvent.wheelDelta);
	if (event.originalEvent.wheelDelta >= 0) {
    	direction = "up";		    	
        // console.log('Scroll up');			        
    }
    else {
    	direction = "down";
        // console.log('Scroll down');			        
    }	    

    $(".inside-banner").each(function(index){
		if (!inWindowView($(this))) return;	
		// moveAround($(this), direction);	
		moveAround($(this), event.originalEvent.wheelDelta);					
	}) 	    
});	

// $(document).ready(function(){
//     $(window).bind('scrollstop', function(){
//         //do something
//     });
// });

//element in the window view
function inWindowView (element) {	
	if (element.offset().top + element.height() < $(window).scrollTop())
		return false;

	if (element.offset().top > $(window).scrollTop() + $(window).height() )
		return false;

	return true;
}

//move the inside image
function moveAround(element, direction){
	speed = 13;
	var positio_y = parseInt(element.css("background-position-y"));
	console.log("direction" + direction / 120 * speed);
	// element.css("background-position-y", ( direction === "up" ? positio_y - speed : positio_y + speed ));
	element.css("background-position-y", positio_y - direction / 120 * speed );
}
