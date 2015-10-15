var topWin = Ti.UI.createWindow({
	backgroundColor: "white"
});
var loadData = require("data");

var mySection = [];


var topTable = Ti.UI.createTableView({
	headerTitle: "Drum Corps International",
	top: 20,
	height: Ti.Platform.displayCaps.platformHeight - 20,
	width: "100%"
});

for (n in loadData.topData){
	var section = Ti.UI.createTableViewSection({
		headerTitle: n
	});
	if (section.headerTitle === "dciWorld"){
		section.headerTitle = "World Class";
	} else {
		section.headerTitle = "Open Class";
	}
	for (var i = 0; i < loadData.topData[n].length; i++){
		var row = Ti.UI.createTableViewRow({
			title: loadData.topData[n][i].title,
			hasChild: true
		});	
		section.add(row);
	}
	mySection.push(section);
}

topTable.setData(mySection);
topWin.add(topTable);

exports.topWin = topWin;