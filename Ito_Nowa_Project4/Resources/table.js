var tableWin = Ti.UI.createWindow({
	backgroundColor: 'white'
});

var tableNav = Ti.UI.iOS.createNavigationWindow({
	window: tableWin
});

exports.tableNav = tableNav;
