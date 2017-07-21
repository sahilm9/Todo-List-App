// check off specific todo's by clicking

$("ul:first-of-type").on("click", "li", function(){

	$(this).toggleClass("completed");

});


$("ul:first-of-type").on("click", "span", function(event){

    var delTodo = $(this).parent().val();
    console.log(delTodo);


    $(this).parent().slideUp(500,function(){
        var moveToDeleted = $(this).html();
        console.log(moveToDeleted);

        $("ul:last-of-type").append("<li>" + moveToDeleted + "</li>");
    });
    event.stopPropagation();
});



$



// to completely delete todo's from the app
$("ul:last-of-type").on("click", "span", function(event){


	$(this).parent().slideUp(500,function(){

		$(this).remove();
	});
	event.stopPropagation();
});




$(".fa-plus").hover(function(){
	$(this).toggleClass('animated flash');
});

$(".fa-window-minimize").hover(function(){
	$(this).toggleClass('animated flash');
});

// to set input to white space and add todo to the TO-DO list
$("input[type = 'text']").keypress(function(event){
	if(event.which === 13)
	{	// grabbing new todo text from input

		var todoText =  $(this).val();

		$(this).val("");

		// create a new li and add to ul
		$("ul:first-of-type").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});


// method to toggle input in "TO-DO LIST"
$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});


// method to toggle "DELETED TODOS"
$(".fa-window-minimize").click(function(){
	$("ul:last-of-type").fadeToggle();
});


// function to add to deleted todo's to DELETED TODO'S LIST
function deletedTodos(delTodo)
{
	var deletedTodoText = delTodo;

	$("ul:last-of-type").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + deletedTodoText + "</li>");

}
