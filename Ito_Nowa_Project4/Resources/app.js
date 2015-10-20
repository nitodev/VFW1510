var loadGallery = require('gallery');
var loadTable = require('table');
var loadExperimental = require('experimental');

var win = Ti.UI.createWindow({
	backgroundColor: 'white',
	backgroundImage: 'galactic.jpg'
});

var topButton = Ti.UI.createButton({
	title: 'Gallery',
	width: '60%',
	height: 70,
	top: 120,
	backgroundColor: '#0080FF',
	color: 'white',
	borderRadius: 15,
	borderColor: 'white',
	opacity: 0.8
});

var middleButton = Ti.UI.createButton({
	title: 'Table',
	width: '60%',
	height: 70,
	top: topButton.top + topButton.height + 50,
	backgroundColor: '#0080FF',
	color: 'white',
	borderRadius: 15,
	borderColor: 'white',
	opacity: 0.8
});

var bottomButton = Ti.UI.createButton({
	title: 'Experimental',
	width: '60%',
	height: 70,
	top: middleButton.top + middleButton.height + 50,
	backgroundColor: '#0080FF',
	color: 'white',
	borderRadius: 15,
	borderColor: 'white',
	opacity: 0.8
});

var name = Ti.UI.createLabel({
	text: 'VFM 1510 - nitodev',
	color: 'gray',
	bottom: 3,
	right: 5
});

win.addEventListener('click', function(e){
	if(e.source.title == 'Gallery'){
		loadGallery.galleryWin.open();
	} else if (e.source.title == 'Table'){
		loadTable.tableNav.open();
	} else if (e.source.title == 'Experimental'){
		loadExperimental.experimentalWin.open();
	}
});

win.add(topButton, middleButton, bottomButton, name);
win.open();
