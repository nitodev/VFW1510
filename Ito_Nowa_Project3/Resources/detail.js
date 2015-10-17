var getDetail = function(info){
	var detailWin = Ti.UI.createWindow({
		backgroundColor: "black"
	});
	var detailImage = Ti.UI.createImageView({
		image: "images/" + info.title + ".jpg",
		width: Ti.Platform.displayCaps.platformWidth
	});
	var imgWrapper = Ti.UI.createScrollView({
		maxZoomScale: 2.0
	});
	var detailTitle = Ti.UI.createLabel({
		text: info.title,
		font: {fontWeight: "bold", fontSize: 20},
		top: 80,
		color: "white"
	});
	var detailLabel = Ti.UI.createLabel({
		text: info.infoDetail,
		font: {fontSize: 14},
		bottom: 80,
		color: "white"
	});
	imgWrapper.add(detailImage);
	detailWin.add(imgWrapper, detailLabel, detailTitle);
	navGroup.openWindow(detailWin);
};


exports.getDetail = getDetail;

