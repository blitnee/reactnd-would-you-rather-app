import React, { Component } from 'react'

class QuestionPrev extends Component {

	render() {
		return (
			<div className='question-card container-element'>
				<h3 className='question-card-title container-element'>Question Preview Card</h3>
				<div className="block-container">
				{/* @todo: Onclick send to '/question/#/vote' */}
					<span className='question-card-block container-element'>Avatar</span>
					<span className='question-card-block container-element'>
						<p>Would You Rather...</p>
						<p>Question 1</p>
						<p>Question 2</p>
					</span>
				</div>
				<div className="button-container">
				{/* @todo: Onclick send to '/question/#/results' */}
					<button className='pole-button container-element'>View Pole</button>
				</div>
			</div>
		)
	}
}

export default QuestionPrev