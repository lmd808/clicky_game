import React from 'react';
import React, { Component } from 'react';
import ScoreBar from '../ScoreBar/scoreBar';
import ImageCard from '../ImageCards/imageCards';

// Bring in Image Cards
import card1 from '../../Images/dog.jpg';
import card2 from '../../Images/peacock.jpg';
import card3 from '../../Images/elephant.jpg';
import card4 from '../../Images/hedgehog.jpg';
import card5 from '../../Images/redPanda.jpg';
import card6 from '../../Images/tiger.jpg';
import card7 from '../../Images/hippo.jpg';
import card8 from '../../Images/zebra.jpg';
import card5 from '../../Images/koala.jpg';
import card5 from '../../Images/whitetiger.jpg';

//psudo code
// push the cards to an array of objects
// use map function to generate a card for each image
// tak on a click event to the cards  (this will be a function)
// if clicked...
// I need to figure out how to create an id and add it to another away
// use counter activity state for base

class RenderSection extends Component {
	// initial state of game
	state = {
		// store set to zero
		score: 0,
		// high score currently at zero
		highScore: 0,
		//my array of images
		images: [
			{ image: card1, key: 1 },
			{ image: card2, key: 2 },
			{ image: card3, key: 3 },
			{ image: card4, key: 4 },
			{ image: card5, key: 5 },
			{ image: card6, key: 6 },
			{ image: card7, key: 7 },
			{ image: card8, key: 8 },
			{ image: card9, key: 9 },
			{ image: card10, key: 10 }
		],
		// array for images clicked
		clickedImages: []
	};
}

export default RenderSection;
