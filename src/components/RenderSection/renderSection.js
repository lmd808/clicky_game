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

// render array
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
		// leave empty, push id's of clicked images later
		clickedArray: []
	};
	// logic to push clicked images to clicked Array
	cardOnClick = (event) => {
		// get the id from the clicked image
		const id = event.target.id;
		// push that data to the clicked Array
		const clickedArray = [ this.state.clickedArray, id ];

		// if the index of my ID is -1 (not in the array)
		if (this.state.clickedArray.indexOf(id) === -1) {
			// update the score
			let score = this.state.score;
			score++;
			// Update Score by one
			this.setState({ score });
			// update the clicked array to track which images are clicked
			this.setState({ clickedArray });
		} else {
			//reset the clicked array and set score to 0
			const clickedArray = [];
			this.setState({ clickedArray });
			this.setState({ score: 0 });
		}
		// return image randomizer
		return this.randomizeImages(this.state.images);
	};

	// function to compare current high score to current score
	componentDidUpdate() {
		// if my high score is less than my current score
		if (this.state.highScore < this.state.score) {
			//  update my high score to the value of  my current score
			this.setState({ highScore: this.state.score });
		}
	}

	// function to render images
	renderImages = () => {
		// map out the images in my image array
		return this.state.images.map((image) => {
			// render my imageCard Component
			// tak on an onclick even key, src and alt
			return <ImageCard id={image.id} onClick={this.cardOnClick} src={image.image} alt={image.text} />;
		});
	};

	randomizeImages = (array) => {
		//randomize images array
		for (let i = array.length - 1; i > 0; i--) {
			let j = Math.floor(Math.random() * (i + 1));
			let holdArray = array[i];
			array[i] = array[j];
			array[j] = holdArray;
		}
		// return the new images array
		return this.setState({ images: array });
	};
	// render initial load
	render() {
		return (
			<div className="row text-center">
				<ScoreBar score={this.state.score} highScore={this.state.highScore} />
				<div>{this.renderImages()}</div>
			</div>
		);
	}
}

export default RenderSection;
