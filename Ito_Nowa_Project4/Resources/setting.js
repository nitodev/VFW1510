var loadGallery = require('gallery');


var settingWin = Ti.UI.createWindow({
	backgroundColor: 'black',
	statusBarStyle: 1
});

var topBanner = Ti.UI.createView({
	height: 80,
	width: '100%',
	top: 20,
	backgroundColor: 'gray'
});
var divider = Ti.UI.createView({
	height: 3,
	width: '100%',
	top: topBanner.height + topBanner.top,
	backgroundColor: 'white'
});
var title = Ti.UI.createLabel({
	text: 'Settings',
	color: 'white'
});
var hint = Ti.UI.createLabel({
	bottom: 0,
	text: 'Swipe from left to exit',
	font: {fontSize: 14},
	color: 'gray'
});


var themeSwitch = Ti.UI.createSwitch({
	value: false,
	right: 10,
	top: 120
});

var themeSwitchLabel = Ti.UI.createLabel({
	text: 'Enable White Image Background',
	font: {fontSize: 15},
	top: themeSwitch.top,
	left: 10,
	color: 'white',
	top: divider.top + 25
});

// conditions for the switch
themeSwitch.addEventListener('change',function(e){
  if (themeSwitch.value === true){
  	loadGallery.galleryWin.backgroundColor = 'white';
  	loadGallery.galleryWin.statusBarStyle = 0;
  	loadGallery.divider.backgroundColor = 'black';
  } else if (themeSwitch.value === false){
  	loadGallery.galleryWin.backgroundColor = 'black';
  	loadGallery.galleryWin.statusBarStyle = 1;
  	loadGallery.divider.backgroundColor = 'white';
  }
});


// swipe gesture for navigation
settingWin.addEventListener('swipe', function(e){
	if (e.direction == 'right'){
		settingWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	}
});

topBanner.add(title);
settingWin.add(topBanner, divider, hint, themeSwitch, themeSwitchLabel);
exports.settingWin = settingWin;
