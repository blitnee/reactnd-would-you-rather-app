import React, { Component } from 'react'
import { saveQuestionAnswer } from '../actions/questions'
import { Link } from 'react-router-dom'

class QuestionPrev extends Component {

	handleClick = (vote) => {
		//dispatch(saveQuestionAnswer(this.state.vote))
	}

	getButtonType = (value) => {
		return value === 'Submit'
			? <button className='pole-button container-element'>{value}</button>
			: <Link to={`/question/${this.props.id}`}><button className='pole-button container-element'>{value}</button></Link>
	}

	render() {
		const { id, avatarURL, author, optionOne, optionTwo, buttonValue  }  = this.props
		return (
			<div className='question-card container-element'>
				<h3 className='question-card-title container-element'>
				 {/* <div style={{ backgroundImage: `url(${avatarURL})` }} /> */}
					<img src={avatarURL} />
					<span>{author}</span>
				</h3>
				<div className="block-container">
				{/* @todo: Onclick send to '/question/#/vote' */}
					<div className='question-card-block container-element'>
						<h4 className='question-title'>Would You Rather...</h4>
						<div className='question-select'>
							<label htmlFor='option-one' className='question-option-label'>
								{/* @todo: Uncheck value bug */}
								<input
									id='option-one'
									type='radio'
									value={this.props.optionOne}
									// onChange={this.handleClick(optionOne.text)}
								/>
								{optionOne}
							</label>
							<label htmlFor='option-two' className='question-option-label'>
								<input
									id='option-two'
									type='radio'
									value={this.props.optionTwo}
									// onChange={this.handleClick(optionTwo.text)}
								/>
								{optionTwo}
							</label>
						</div>
					</div>
				</div>
				<div className="button-container">
				{/* @todo: Onclick send to '/question/#/results' */}
					{this.getButtonType(buttonValue)}

				</div>
			</div>
		)
	}
}

export default QuestionPrev