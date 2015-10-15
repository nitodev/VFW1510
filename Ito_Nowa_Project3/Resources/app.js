var loadData = require("data");
var loadTop = require("topTable");
var loadBottom = require("bottomTable");

Ti.UI.setBackgroundColor = "white";
var win = Ti.UI.createWindow({
	backgroundColor: "white"
});

var topHalf = Ti.UI.createView({
	top: 0,
	width: "100%",
	height: Ti.Platform.displayCaps.platformHeight / 2,
	backgroundColor: "blue"
});

var bottomHalf = Ti.UI.createView({
	top: topHalf.height,
	height: topHalf.height,
	width: "100%",
	backgroundColor: "red"
});

topHalf.addEventListener("click", function(){
	loadTop.topWin.open();
});

bottomHalf.addEventListener("click", function(){
	loadBottom.bottomWin.open();
});

win.add(topHalf, bottomHalf);
win.open();


