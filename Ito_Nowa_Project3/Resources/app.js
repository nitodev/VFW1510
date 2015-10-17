var loadTop = require("topTable");
var loadBottom = require("bottomTable");

Ti.UI.setBackgroundColor = "white";
var win = Ti.UI.createWindow({
	backgroundColor: "white",
	title: "Drum Corps International"
});
var imgView = Ti.UI.createImageView({
	image: "dciLogo.png",
	height: 200
});

// creating navigation window for better navigation
var navGroup = Ti.UI.iOS.createNavigationWindow({
	window: win
});


var topHalf = Ti.UI.createView({
	top: (Ti.Platform.displayCaps.platformHeight / 6) - 60,
	width: "75%",
	height: Ti.Platform.displayCaps.platformHeight / 5,
	backgroundColor: "#109FEB",
	opacity: 0.8,
	borderRadius: 20,
	name: "top"
});
var bottomHalf = Ti.UI.createView({
	bottom: topHalf.height - 80,
	height: topHalf.height,
	width: "75%",
	backgroundColor: "#109FEB",
	opacity: 0.8,
	borderRadius: 20,
	name: "bottom"
});

var topLabel = Ti.UI.createLabel({
	text: "DCI Corps",
	color: "white",
	name: topHalf.name
});
var bottomLabel = Ti.UI.createLabel({
	text: "DCI Ranking",
	color: "white",
	name: bottomHalf.name
});

// event propogation
win.addEventListener("click", function(e){
	if (e.source.name === "top"){
		navGroup.openWindow(loadTop.topWin);
	} else if (e.source.name === "bottom"){
		navGroup.openWindow(loadBottom.bottomWin);
	}
});

topHalf.add(topLabel);
bottomHalf.add(bottomLabel);
win.add(imgView, topHalf, bottomHalf);
navGroup.open();
