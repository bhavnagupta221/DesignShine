//test the link between files
$( "p" ).click(function() {
    console.log( "You clicked a paragraph!" );
});

$('#login').mousemove(function() {
	$(this).css("background-color", "#57c658");
	$(this).css("border-color", "#57c658");
});

$('#login').mouseleave(function() {
	$(this).css("background-color","#343a40");
	$(this).css("border-color", "#343a40");
});
