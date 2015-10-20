var win = Ti.UI.createWindow({
	backgroundColor: "white",
	backgroundImage: "galactic.jpg"
});

var topButton = Ti.UI.createButton({
	title: "view",
	width: "60%",
	height: "20%",
	top: 70,
	backgroundColor: "black",
	color: "red",
	borderRadius: 15,
	borderColor: "red"
});

var middleButton = Ti.UI.createButton({
	title: "view",
	width: "60%",
	height: "20%",
	top: topButton.top + topButton.height,
	backgroundColor: "black",
	color: "red",
	borderRadius: 15,
	borderColor: "red"
});

var bottomButton = Ti.UI.createButton({
	title: "view",
	width: "60%",
	height: "20%",
	top: 0,
	backgroundColor: "black",
	color: "red",
	borderRadius: 15,
	borderColor: "red"
});

win.add(topButton, middleButton, bottomButton);
win.open();
