//var loadData = require("data");
var loadTop = require("topTable");
var loadBottom = require("bottomTable");

var getDetail = function(info){
	var detailWin = Ti.UI.createWindow({
		backgroundColor: "white"
	});
	var detailImage = Ti.UI.createImageView({
		image: "images/" + info.title + ".png"
	});
	var detailTitle = Ti.UI.createLabel({
		text: info.title,
		top: 80
	});
	var detailLabel = Ti.UI.createLabel({
		text: info.infoDetail,
		bottom: 80
	});
	detailWin.add(detailImage, detailLabel, detailTitle);
	navGroup.openWindow(detailWin);
};


exports.getDetail = getDetail;

