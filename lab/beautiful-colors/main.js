function getHex(color) {
    color = color.slice(4,-1);
    color = color.split(",");
    var hex = color.map(function(a) {
	a = parseInt(a);
	return (a < 16 ? '0' : '') + a.toString(16);
    }).join('');
    return "#" + hex;
}

$(document).ready(function() {
    $("span").click(function() {
	var backgroundColor = $(this).css("background-color");
	var hex = getHex(backgroundColor);
	$("h1").html(backgroundColor + "<br>" + hex);
    });
});
