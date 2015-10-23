var pictures = [
	{title: 'Golden Alien'},
	{title: 'Crystalized Jellyfish'},
	{title: 'Pink Splash'},
	{title: 'Obsidian Point'},
	{title: 'Royal Dust'}
];

var galaxies = {
	named : [
		{
			title: 'Andromeda Galaxy',
			description: 'It is the closest big galaxy to the milky way.'
		},{
			title: 'Comet Galaxy',
			description: 'The comet effect is caused by tidal stripping by its galaxy cluster.'
		},{
			title: 'Cosmos Redshift 7',
			description: 'It\'s reported to be the brightest of distant galaxies.'
		},{
			title: 'Hoag\'s Object',
			description: 'It\'s a polar-ring galaxy with the ring in the plane of rotation of the central object.'
		},{
			title: 'Large Megallanic Cloud',
			description: 'This is the fourth largest galaxy in the local group.'
		},{
			title: 'Mayall\'s Object',
			description: 'A peculiar looking object, likely to be two galaxies undergoing a collision.'
		},{
			title: 'Tadpole Galaxy',
			description: 'The shape resulted from tidal interaction that drew out a long tidal tail.'
		}
	],
	nakedEye : [
		{
			title: 'Milky Way',
			description: 'Our galaxy; most visible object in the sky are part of it.'
		},{
			title: 'Small Magellanic Cloud',
			description: 'Visible only from the southern hemisphere.'
		},{
			title: 'Triangulum',
			description: 'Being a diffuse object, its visibility is strongly affected by small amounts of light pollution.'
		}
	]
};


// adding images to var galaxies using individual titles
for (i = 0; i < galaxies.named.length; i++){
	galaxies.named[i].image = 'galaxies/' + galaxies.named[i].title + '.jpg';
}
for (c = 0; c < galaxies.nakedEye.length; c++){
	galaxies.nakedEye[c].image = 'galaxies/' + galaxies.nakedEye[c].title + '.jpg';
}



exports.galaxies = galaxies;
exports.pictures = pictures;