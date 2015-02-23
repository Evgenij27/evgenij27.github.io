function test() {
	var elem = document.getElementByClassName("test").onclick=function() {
		var el = document.getElementByClassname("test");
		el.style.background-color = "green";	
	}
}
