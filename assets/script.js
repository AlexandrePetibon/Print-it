const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const leftArrow = document.getElementById('left_arrow');
const rightArrow = document.getElementById('right_arrow');


leftArrow.addEventListener('click', () => {
	console.log('On clique sur la flèche de gauche');
});

rightArrow.addEventListener('click', () => {
	console.log('On clique sur la flèche de droite');
});