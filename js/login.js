//test the link between files
$( "p" ).click(function() {
    console.log( "You clicked a paragraph!" );
});

//changes color of login in button
$('#login').mousemove(function() {
	$(this).css("background-color", "#57c658");
	$(this).css("border-color", "#57c658");
});

$('#login').mouseleave(function() {
	$(this).css("background-color","#343a40");
	$(this).css("border-color", "#343a40");
});

//changes color of submit button, create account
$('#submit').mousemove(function() {
	$(this).css("background-color", "#57c658");
	$(this).css("border-color", "#57c658");
});

$('#submit').mouseleave(function() {
	$(this).css("background-color","#343a40");
	$(this).css("border-color", "#343a40");
});

//changes color of back button, create account
$('#back').mousemove(function() {
	$(this).css("background-color", "#c40916");
	$(this).css("border-color", "#c40916");
});

$('#back').mouseleave(function() {
	$(this).css("background-color","#343a40");
	$(this).css("border-color", "#343a40");
});

//hover over user profile link
$('.profile').mousemove(function() {
	$(this).css("background-color", "black");
	$(this).css("color","white");
	$('#seller').css("color","white");
	$(this).css("border-color","white")
});

$('.profile').mouseleave(function() {
	$(this).css("background-color","white");
	$(this).css("color", "black");
	$('#seller').css("color","black");
	$(this).css("border-color","black");
});
