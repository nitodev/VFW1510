var loadData = require("data");
var loadDetail = require("detail");

var topWin = Ti.UI.createWindow({
	backgroundColor: "white",
	title: "CORPS"
});


var mySection = [];


var topTable = Ti.UI.createTableView({
	headerTitle: "Drum Corps International"
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
			infoDetail: loadData.topData[n][i].infoDetail,
			hasChild: true
		});	
		section.add(row);
	}
	mySection.push(section);
}

// passing function to detail.js
topTable.addEventListener("click", function(e){
	loadDetail.getDetail(e.source);
});


topTable.setData(mySection);
topWin.add(topTable);

exports.topWin = topWin;