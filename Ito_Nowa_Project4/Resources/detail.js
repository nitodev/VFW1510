var getDetail = function(tableDetail){
	var detailWin = Ti.UI.createWindow({
		backgroundColor: 'black'
	});
	var detailImage = Ti.UI.createImageView({
		image: tableDetail.image
	});
	var title = Ti.UI.createLabel({
		text: tableDetail.title,
		top: 60,
		color: 'white'
	});
	var description = Ti.UI.createLabel({
		text: tableDetail.desc,
		bottom: 50,
		color: 'white',
		width: '80%'
	});
	detailWin.add(detailImage, title, description);
	loadTable.tableNav.openWindow(detailWin);
};

exports.getDetail = getDetail;

