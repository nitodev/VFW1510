var topData = {
	dciWorld : [
		{title: "Academy", infoDetail: "Tempe, Arizona"},
		{title: "Blue Devils", infoDetail: "Concord, California"},
		{title: "Blue Knights", infoDetail: "Denver, Colorado"},
		{title: "Blue Stars", infoDetail: "La Crosse, Wisconsin"},
		{title: "Bluecoats", infoDetail: "Canton, Ohio"},
		{title: "Boston Crusaders", infoDetail: "Boston, Massachusetts"},
		{title: "Cadets", infoDetail: "Allentown, Pennsylvania"},
		{title: "Carolina Crown", infoDetail: "Fort Mill, South Carolina"},
		{title: "Cascades", infoDetail: "Seattle, Washington"},
		{title: "Cavaliers", infoDetail: "Rosemont, Illinois"},
		{title: "Colts", infoDetail: "Dubuque, Iowa"},
		{title: "Crossmen", infoDetail: "San Antonio, Texas"},
		{title: "Jersey Surf", infoDetail: "Berlin, New Jersey"},
		{title: "Madison Scouts", infoDetail: "Madison, Wisconsin"},
		{title: "Mandarins", infoDetail: "Sacramento, California"},
		{title: "Oregon Crusaders", infoDetail: "Portland, Oregon"},
		{title: "Pacific Crest", infoDetail: "Diamond Bar, California"},
		{title: "Phantom Regiment", infoDetail: "Rockford, Illinois"},
		{title: "Pioneer", infoDetail: "Milwaukee, Wisconsin"},
		{title: "Santa Clara Vanguard", infoDetail: "Santa Clara, California"},
		{title: "Spirit of Atlanta", infoDetail: "Atlanta, Georgia"},
		{title: "Troopers", infoDetail: "Casper, Wyoming"}
	],
	dciOpen : [
		{title: "Blue Saints", infoDetail: "Sudbury, Ontario"},
		{title: "Genesis", infoDetail: "Austin, Texas"},
		{title: "Heat Wave of Florida", infoDetail: "Inverness, Florida"},
		{title: "Incognito", infoDetail: "Garden Grove, California"},
		{title: "Legends", infoDetail: "Kalamazoo, Michigan"},
		{title: "Music City", infoDetail: "Nashville, Tennessee"},
		{title: "Spartans", infoDetail: "Nashua, New Hampshire"},
		{title: "Watchmen", infoDetail: "Riverside, California"}
	]
};

var bottomData = {
	fifteen : [
		{properties: {title: "Blue Devils", subtitle: "97.650", infoDetail: "Ink", accessoryType: 1}},
		{properties: {title: "Carolina Crown", subtitle: "97.075", infoDetail: "Inferno", accessoryType: 1}},
		{properties: {title: "Bluecoats", subtitle: "96.925", infoDetail: "Kinetic Noise", accessoryType: 1}}
	],
	fourteen : [
		{properties: {title: "Blue Devils", subtitle: "99.650", infoDetail: "Felliniesque", accessoryType: 1}},
		{properties: {title: "Bluecoats", subtitle: "97.175", infoDetail: "TILT", accessoryType: 1}},
		{properties: {title: "Cadets", subtitle: "96.875", infoDetail: "Promise: An American Portrait", accessoryType: 1}}
	],
	thirteen : [
		{properties: {title: "Carolina Crown", subtitle: "98.300", infoDetail: "E = MC²", accessoryType: 1}},
		{properties: {title: "Blue Devils", subtitle: "98.050", infoDetail: "The Re:Rite of Spring", accessoryType: 1}},
		{properties: {title: "Cadets", subtitle: "96.950", infoDetail: "Side><Side: The Music of Samuel Barber", accessoryType: 1}}
	]
};

// creating property of 'image' for bottomData and assigning appropriate pictures based on the title
for (n in bottomData){
	for (i = 0; i < 3; i++){
		if (bottomData[n][i].properties.title === "Blue Devils"){
			bottomData[n][i].properties.image = "listImages/devils.png";
		} else if (bottomData[n][i].properties.title === "Carolina Crown"){
			bottomData[n][i].properties.image = "listImages/crown.png";
		} else if (bottomData[n][i].properties.title === "Bluecoats"){
			bottomData[n][i].properties.image = "listImages/coats.png";
		} else {
			bottomData[n][i].properties.image = "listImages/cadets.png";
		}
	}
}


exports.topData = topData;
exports.bottomData = bottomData;