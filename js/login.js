//initializes page
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
	})
