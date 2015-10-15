var bottomWin = Ti.UI.createWindow({
	backgroundColor: "white"
});
var loadData = require("data");

var mySection = [];


var bottomTable = Ti.UI.createTableView({
	headerTitle: "DCI Final Top 3 Ranking",
	top: 20,
	height: Ti.Platform.displayCaps.platformHeight - 20,
	width: "100%"
});

for (n in loadData.bottomData){
	var section = Ti.UI.createTableViewSection({
		headerTitle: n
	});
	if (section.headerTitle === "fifteen"){
		section.headerTitle = "2015";
	} else if (section.headerTitle === "fourteen"){
		section.headerTitle = "2014";
	} else {
		section.headerTitle = "2013";
	}
	for (var i = 0; i < loadData.bottomData[n].length; i++){
		var row = Ti.UI.createTableViewRow({
			title: loadData.bottomData[n][i].title,
			hasChild: true
		});	
		section.add(row);
	}
	mySection.push(section);
}

bottomTable.setData(mySection);
bottomWin.add(bottomTable);

exports.bottomWin = bottomWin;