var loadData = require('data');


var tableWin = Ti.UI.createWindow({
	backgroundColor: 'white',
	title: 'Galaxies'
});
var tableNav = Ti.UI.iOS.createNavigationWindow({
	window: tableWin
});

var mySection = [];

var tableView = Ti.UI.createTableView({
	headerTitle: 'List of Galaxies'
});

for (n in loadData.galaxies){
	var section = Ti.UI.createTableViewSection({
		headerTitle: n
	});
	if (section.headerTitle === 'named'){
		section.headerTitle = 'Famous Galaxies';
	} else {
		section.headerTitle = 'Visible with Naked Eye';
	}
	for (var g = 0; g < loadData.galaxies[n].length; g++){
		var row = Ti.UI.createTableViewRow({
			title: loadData.galaxies[n][g].title,
			infoDetail: loadData.galaxies[n][g].description,
			hasChild: true
		});
		section.add(row);
	}
	mySection.push(section);
}

tableView.setData(mySection);
tableWin.add(tableView);


//console.log(loadData.galaxies.nakedEye[0].image);
//console.log(loadData.galaxies.named.length);

exports.tableNav = tableNav;
