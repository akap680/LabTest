function bulbControl() {	
	// **This function operates under the assumption that both lightbulbs are in the same state
	if ($("#image1").attr('src') === 'images/turnon.png')
	{
		$("#image1").attr("src","images/turnoff.png");
		$("#image2").attr("src","images/turnoff.png");
	}
	else
	{
		$("#image1").attr("src","images/turnon.png");
		$("#image2").attr("src","images/turnon.png");
	}
}

function colorChange() {
	$("#button1").css("color", "green");
	$("#button2").css("color", "blue");
	$("#button3").css("color", "yellow");
	$("h1").css("font-family", "Verdana,sans-serif")
}

function attributesChange() {
	$("#mainnav").animate({
		opacity: '0.75',
		width: '800px'
	});
}