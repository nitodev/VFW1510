//creating main window
var mainWindow = Ti.UI.createWindow({
	//backgroundColor: "#fff",
	backgroundImage: "texture.jpg",
	statusBarStyle: Ti.UI.iPhone.StatusBar.LIGHT_CONTENT //changed statusbar for visibility
});

mainWindow.open(); //opening window

var i = 0; //setting a variable for conditions for farther down


//making arrays for definitions on each subject
var mobilePlatforms = ["iOS", "Windows", "TouchWiz", "HTC Sense", "Cyanogen"];
var pictures = ["ios.png", "windows.png", "touchwiz.png", "htcsense.png", "cyanogen.png"];
var description = [
	"Minimalistic and beautifully designed OS for average user operation.",
	"Developed by Microsoft, while being unpopular, it's integrated well with other MS products.",
	"Developed by Samsung, usually bloated with useless applications.",
	"Developed by HTC, works well with consumers with collaborated features",
	"An third party OS which many prefer on their Android devices. (formally partnered with OnePlus)"
];

//view for pictures
var pictureView = Ti.UI.createView({
	backgroundImage: pictures[0],
	top: 150,
	height: 50,
	width: 50
});

//view for top band
var topWindow = Ti.UI.createView({
	height: 100,
	width: "100%",
	backgroundColor: "black",
	top: 0
});

//adding white border at the bottom of top band for design
var topWindowBorder = Ti.UI.createView({
	height: 5,
	width: "100%",
	backgroundColor: "fff",
	top: topWindow.height + 1
});

//label for regarding title
var topWindowLabel = Ti.UI.createLabel({
	text: "Mobile Platforms",
	color: "fff",
	font: {fontSize: 30},
	top: 45
});

//label for subjects ++
var subject = Ti.UI.createLabel({
	text: mobilePlatforms[0],
	color: "black",
	font: {fontSize: 27},
	top: 205
});

//definition for subject ++
var more = Ti.UI.createLabel({
	text: description[0],
	color: "black",
	font: {fontSize: 20},
	top: 255,
	left: 40,
	right: 30
});

//adding a picture for back button
var leftButton = Ti.UI.createView({
	backgroundImage: "back.png",
	bottom: 30,
	left: 30,
	height: 50,
	width: 50
});

//adding a picture for forward button
var rightButton = Ti.UI.createView({
	backgroundImage: "next.png",
	bottom: 30,
	right: 30,
	height: 50,
	width: 50
});

//adding all of components below to the mainWindow
mainWindow.add(topWindow, topWindowBorder, topWindowLabel, subject, more, leftButton, rightButton, pictureView);

//conditional statements for navigation
function left(){
	i--;
	if (i < 0){
		i = mobilePlatforms.length - 1; //if i is less than 0, i would equal to 5 - 1, which is 4, making it the last subject
	};
	subject.text = mobilePlatforms[i]; //updating three main components below
	more.text = description[i];
	pictureView.backgroundImage = pictures[i];
};
function right(){
	i++;
	if (i > mobilePlatforms.length - 1){
		i = 0; //if i becomes bigger than 4, make it 0, the first subject
	};
	subject.text = mobilePlatforms[i]; //updating three main components below
	more.text = description[i];
	pictureView.backgroundImage = pictures[i];
};

//eventlister for buttons
leftButton.addEventListener("singletap", left);
rightButton.addEventListener("singletap", right);


