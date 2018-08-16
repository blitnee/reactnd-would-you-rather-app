import React, { Component } from 'react'

class QuestionPrev extends Component {

	render() {
		return (
			<div className='question-card container-element'>
				<h3 className='question-card-title container-element'>
					<div style={{ backgroundImage: `url(${this.props.avatarURL})` }} />
					<span>{this.props.author}</span>
				</h3>
				<div className="block-container">
				{/* @todo: Onclick send to '/question/#/vote' */}
					<div className='question-card-block container-element'>
						<h4 className='question-title'>Would You Rather...</h4>
						<div className='question-select'>
							<label htmlFor='one' className='option'>
								{/* @todo: Uncheck value bug */}
								<input
									id='one'
									type='radio'
									// value={this.props.optionOne}
									onChange={this.handleClick(this.props.optionOne.text)}
								/>
								{this.props.optionOne}
							</label>
							<label htmlFor='two' className='option'>
								<input
									id='two'
									type='radio'
									// value={this.props.optionTwo}
									onChange={this.handleClick(this.props.optionTwo.text)}
								/>
								{this.props.optionTwo}
							</label>
						</div>
					</div>
				</div>
				<div className="button-container">
				{/* @todo: Onclick send to '/question/#/results' */}
					<button className='pole-button container-element'>{this.props.buttonValue}</button>
				</div>
			</div>
		)
	}
}

export default QuestionPrev