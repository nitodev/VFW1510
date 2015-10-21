var loadData = require('data');

var galleryWin = Ti.UI.createWindow({
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

var randomizer = Ti.UI.createButton({
	width: 100,
	height: 50,
	backgroundColor: 'gray',
	bottom: 60,
	title: 'Begin',
	borderRadius: 15,
	color: 'white'
});

var title = Ti.UI.createLabel({
	text: 'Gallery Randomizer',
	color: 'white'
});

var currentNumber;
var imageView = Ti.UI.createImageView();
var randomNumber;


var randomizeThis = function(){
	randomNumber = Math.floor(Math.random() * (5 - 0) + 0);
};

randomizer.addEventListener('singletap', function(){
	randomizer.title = 'Randomize';
	randomizeThis();
	while (randomNumber == currentNumber){
		randomizeThis();
		if (randomNumber != currentNumber){
			break;
		}
	}
	currentNumber = randomNumber;
	imageView.image = 'pictures/' + loadData.pictures[randomNumber].title + '.jpg';
});



topBanner.add(title);
galleryWin.add(topBanner, divider, randomizer, imageView);

exports.galleryWin = galleryWin;
