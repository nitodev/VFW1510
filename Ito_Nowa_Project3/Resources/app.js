var dciWorld = [
	{title: "Academy", location: "Tempe, Arizona"},
	{title: "Blue Devils", location: "Concord, California"},
	{title: "Blue Knights", location: "Denver Colorado"},
	{title: "Blue Stars", location: "La Crosse, Wisconsin"},
	{title: "Bluecoats", location: "Canton, Ohio"},
	{title: "Boston Crusaders", location: "Boston, Massachusetts"},
	{title: "Cadets", location: "Allentown, Pennsylvania"},
	{title: "Carolina Crown", location: "Fort Mill, South Carolina"},
	{title: "Cascades", location: "Seattle, Washington"},
	{title: "Cavaliers", location: "Rosemont, Illinois"},
	{title: "Colts", location: "Dubuque, Iowa"},
	{title: "Crossmen", location: "San Antonio, Texas"},
	{title: "Jersey Surf", location: "Berlin, New Jersey"},
	{title: "Madison Scouts", location: "Madison, Wisconsin"},
	{title: "Mandarins", location: "Sacramento, California"},
	{title: "Oregon Crusaders", location: "Portland, Oregon"},
	{title: "Pacific Crest", location: "Diamond Bar, California"},
	{title: "Phantom Regiment", location: "Rockford, Illinois"},
	{title: "Pioneer", location: "Milwaukee, Wisconsin"},
	{title: "Santa Clara Vanguard", location: "Santa Clara, California"},
	{title: "Spirit of Atlanta", location: "Atlanta, Georgia"},
	{title: "Troopers", location: "Casper, Wyoming"}
];
var dciOpen = [
	{title: "Blue Saints", location: "Sudbury, Ontario"},
	{title: "Genesis", location: "Austin, Texas"},
	{title: "Heat Wave of Florida", location: "Inverness, Florida"},
	{title: "Incognito", location: "Garden Grove, California"},
	{title: "Legends", location: "Kalamazoo, Michigan"},
	{title: "Music City", location: "Nashville, Tennessee"},
	{title: "Spartans", location: "Nashua, New Hampshire"},
	{title: "Watchmen", location: "Riverside, California"}
];

var win = Ti.UI.createWindow({
	backgroundColor: "white"
});

var table = Ti.UI.createTableView({
	headerTitle: "Drum Corps International",
	top: 20
});

var dciWorldSection = Ti.UI.createTableViewSection({
	headerTitle: "World Class"
});

var dciOpenSection = Ti.UI.createTableViewSection({
	headerTitle: "Open Class"
});

for (var i = 0; i < dciWorld.length; i++){
	var row = Ti.UI.createTableViewRow({
		title: dciWorld[i].title
	});
	dciWorldSection.add(row);
}
for (var g = 0; g < dciOpen.length; g++){
	var row = Ti.UI.createTableViewRow({
		title: dciOpen[g].title
	});
	dciOpenSection.add(row);
}

var mySection = [dciWorldSection, dciOpenSection];

table.setData(mySection);

win.add(table);
win.open();
