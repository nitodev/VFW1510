var loadData = require("data");
var loadDetail = require("detail");

var collection = [];

var bottomWin = Ti.UI.createWindow({
	backgroundColor: "white",
	title: "RANKINGS"
});

var bottomTable = Ti.UI.createListView({
	headerTitle: "DCI '13~'15 Ranking",
	defaultItemTemplate: Ti.UI.LIST_ITEM_TEMPLATE_SUBTITLE
});

for (n in loadData.bottomData){
	var listSection = Ti.UI.createListSection({
		headerTitle: n
	});
	if (listSection.headerTitle === "fifteen"){
		listSection.headerTitle = "2015";
	} else if (listSection.headerTitle === "fourteen"){
		listSection.headerTitle = "2014";
	} else {
		listSection.headerTitle = "2013";
	}
	listSection.setItems(loadData.bottomData[n]);
	collection.push(listSection);
}


bottomTable.addEventListener("itemclick", function(e){
	loadDetail.getDetail(e.section.items[e.itemIndex].properties);
});

bottomTable.setSections(collection);

bottomWin.add(bottomTable); 


exports.bottomWin = bottomWin;