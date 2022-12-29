

$(document).ready(function(){
    $(document).ready(function(){
        $('.sec').delay(000).animate({'opacity': '100%', 'margin-top': '0px'}, 1000, 'easeOutBack');
	});

});


$(document).ready(function(){

$("#ham").on('click', function(){
        $('#burger').animate({'opacity':'100%', 'left':'0%'}, 600, 'easeOutExpo');		
});
	$("#burger_x").on('click', function(){
        $('#burger').animate({'opacity':'100%', 'left':'200%'}, 300, 'easeInCirc');		
});

	
	
});
