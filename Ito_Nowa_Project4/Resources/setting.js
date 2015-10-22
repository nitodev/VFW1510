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
var zoomSwitch = Ti.UI.createSwitch({
	value: false,
	right: themeSwitch.right,
	top: themeSwitch.top + 50
});

var themeSwitchLabel = Ti.UI.createLabel({
	text: 'Enable White Background',
	top: themeSwitch.top,
	left: 10,
	color: 'white'
});
var zoomSwitchLabel = Ti.UI.createLabel({
	text: 'Enable Image Zoom',
	top: zoomSwitch.top,
	left: 10,
	color: 'white'
});

themeSwitch.addEventListener('change',function(e){
  console.log('Switch value: ' + themeSwitch.value);
});
zoomSwitch.addEventListener('change',function(e){
  console.log('Switch value: ' + zoomSwitch.value);
});



settingWin.addEventListener('swipe', function(e){
	if (e.direction == 'right'){
		settingWin.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	}
});

topBanner.add(title);
settingWin.add(topBanner, divider, hint, zoomSwitch, themeSwitch, themeSwitchLabel, zoomSwitchLabel);
exports.settingWin = settingWin;
