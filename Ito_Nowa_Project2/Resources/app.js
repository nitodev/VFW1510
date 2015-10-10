var win = Ti.UI.createWindow({
	backgroundWindow: "white",
	statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT
});

//setting up a variable for a collection of images
var photoFolder = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory,"images");
var myPhotos = photoFolder.getDirectoryListing();

var pWidth = Ti.Platform.displayCaps.platformWidth;

//UI setup
var topView = Ti.UI.createView({
	top: 20,
	width: "100%",
	height: 85,
	backgroundColor: "#5F5F5F",
	opacity: 0.95,
});
var band = Ti.UI.createView({
	top: topView.top + topView.height,
	backgroundColor: "white",
	width: "100%",
	height: 3
});
var topLabel = Ti.UI.createLabel({
	text: "Key & Peele",
	font: {fontSize: 24},
	color: "white",
	top: 50,	
});

//change main font if platform is ipad
if (Ti.Platform.osname === "ipad"){
	topLabel.font = {fontSize: 38};
};
	
//scroll view != scrollable view
var container = Ti.UI.createScrollView({
	layout: "horizontal",
	contentWidth: "100%",
	top: 20,
	showVerticalScrollIndicator: true
});

//loading a data file to manipulate as 'var load' for -67 & -68
var load = require("data"); 


//setting up views as boxes which holds thumbnails
for (var i = 0; i < 30; i++){
	var view = Ti.UI.createView({
		width: pWidth / 5,
		height: pWidth / 5,
		top: container.top + 75, //75 because of 'topView' @ -13
		left: (pWidth / 4) / 6,
		borderColor: "white",
		index: i //setting up index of 'i' for use with '.this' @ -69
	});
	if(i > 3){
		view.top = 15; // changing view.top down for less spacing after the fourth pic
	};
	var thumb = Ti.UI.createImageView({
		image: "images/" + myPhotos[i],
		width: view.width*2
	});
	view.add(thumb);
	container.add(view);
	view.addEventListener("click", function(){
		load.photoView.currentPage = this.index; // changing an object for 'data.js' $$$$$
		load.dataWin.open(); //opening window from 'data.js' $$$$$$
	});
}

win.open();
win.add(container, topView, topLabel, band);


