var dataWin = Ti.UI.createWindow({
	backgroundColor: "black",
	statusBarStyle: 1, //light content status bar
	modal: true //opens window from bottom to top
});

var img = []; //empty array for -18

for (i = 0; i < myPhotos.length; i++){
	var pic = Ti.UI.createImageView({
		image: "images/" + myPhotos[i],
		width: pWidth
	});
	var imgWrapper = Ti.UI.createScrollView({
		maxZoomScale: 5.0
	});
	imgWrapper.add(pic); //adding pic to scrollView for pinch/zoom
	img.push(imgWrapper); //pushing all picture to empty 'img[]' @ -7
}

var closeButton = Ti.UI.createImageView({
	image: "close.png",
	left: 10,
	top: 25,
	width: 35,
	height: 35
});

//scrollable view != scrollview... enables galley viewing by swiping
var photoView = Ti.UI.createScrollableView({
	views: img //source from -7 && -18
});

closeButton.addEventListener("click", function(){
	dataWin.close();
});

dataWin.add(photoView, closeButton);

//exporting 'photoView' && 'dataWin' for manipulation done in 'app.js' @ -70 -71
exports.photoView = photoView;
exports.dataWin = dataWin;

