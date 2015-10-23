var loadData = require('data');
var loadDetail = require('detail');


var tableWin = Ti.UI.createWindow({
	backgroundColor: 'white',
	title: 'Galaxies'
});
// setting up navigation window specific for tableview
var tableNav = Ti.UI.iOS.createNavigationWindow({
	window: tableWin
});

var mySection = [];

var tableView = Ti.UI.createTableView({
	headerTitle: 'List of Galaxies',
	footerTitle: 'Swipe from left to exit'
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
			desc: loadData.galaxies[n][g].description,
			image: loadData.galaxies[n][g].image,
			hasChild: true
		});
		section.add(row);
	}
	mySection.push(section);
}

tableView.setData(mySection);
tableWin.add(tableView);

// setting up swipe gesture for navigation on the first window
tableNav.addEventListener('swipe', function(e){
	if (e.direction == 'right'){
		tableNav.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	}
});

tableView.addEventListener('click', function(v){
	loadDetail.getDetail(v.source);
});

exports.tableNav = tableNav;
