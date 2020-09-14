											//Check off specific todos by clicking
$("ul").on("click", "li", function(){ 		//listening to "li"s clicked inside the ul
	$(this).toggleClass("completed");
});

											//Click on X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(300, function(){ //fades out the span above
		$(this).remove(); 					//removes the this above, waits for fadeOut to finish
	});
	event.stopPropagation(); 				//jQuery methods that stops the event from bubbling up

});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){ 				//This is how we check for the enter key press
											//grabbing new todo text from input
		var todoText = $(this).val();
		$(this).val("");
											//create a new li and add to ul
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
	}
});

$(".fa-pen-square").click(function(){
	$("input[type='text']").fadeToggle(300);
});