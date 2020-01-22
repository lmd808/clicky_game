// import React from 'react';
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
import card9 from '../../Images/koala.jpg';
import card10 from '../../Images/whitetiger.jpg';

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
			{ image: card1, id: 1, text: 'Animal' },
			{ image: card2, id: 2, text: 'Animal' },
			{ image: card3, id: 3, text: 'Animal' },
			{ image: card4, id: 4, text: 'Animal' },
			{ image: card5, id: 5, text: 'Animal' },
			{ image: card6, id: 6, text: 'Animal' },
			{ image: card7, id: 7, text: 'Animal' },
			{ image: card8, id: 8, text: 'Animal' },
			{ image: card9, id: 9, text: 'Animal' },
			{ image: card10, id: 10, text: 'Animal' }
		],
		// array for images clicked
		clickedArray: []
	};

	cardOnClick = (event) => {
		// get the id from the card clicked
		const id = event.target.id;
		// create a new array with the old array of clicked cards, and add the new one
		const clicked = [ this.state.clicked, id ];

		if (this.state.clickedArray.indexOf(id) === -1) {
			// update the score
			let score = this.state.score;
			score++;
			// add one to the score and update the clicked array to track which images have been clicked
			this.setState({ score });
			this.setState({ clickedArray });
		} else {
			//reset the clicked array and return the score to 0
			const clicked = [];
			this.setState({ clickedArray });
			this.setState({ score: 0 });
		}

		// return image shuffle
		return this.shuffleImages(this.state.images);
	};

	componentDidUpdate() {
		// compare current high score to current score
		// if my high score is less than my current score
		//  update my high score to my current score
		if (this.state.highScore < this.state.score) {
			this.setState({ highScore: this.state.score });
		}
	}

	shuffleImages = (array) => {
		// logic from my word guess game
		for (let i = array.length - 1; i > 0; i--) {
			// randomize it
			let j = Math.floor(Math.random() * (i + 1));
			let temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		// return the new images array
		return this.setState({ images: array });
	};

	renderImages = () => {
		return this.state.images.map((image) => {
			return <ImageCard id={image.id} onClick={this.cardOnClick} src={image.image} alt={image.text} />;
		});
	};

	render() {
		return (
			<div className="scoreBar row text-align-center">
				<ScoreBar score={this.state.score} highScore={this.state.highScore} />
				<div className="cardContainer">{this.renderImages()}</div>
			</div>
		);
	}
}

export default RenderSection;
