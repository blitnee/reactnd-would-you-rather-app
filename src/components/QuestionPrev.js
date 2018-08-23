import React, { Component } from 'react'
import { saveQuestionAnswer } from '../actions/questions'
import { Link } from 'react-router-dom'

class QuestionPrev extends Component {

	state = {
		vote: ''
	}

	componentDidMount() {
		if (this.props.optionOne.votes.includes(this.props.authedUser)) {
			this.setState({ vote: 'optionOne' })
		} else if (this.props.optionTwo.votes.includes(this.props.authedUser)) {
			this.setState({ vote: 'optionTwo' })
		}
	}

	handleClick = (e) => {
		this.setState({ vote: e.target.value })
		// dispatch(saveQuestionAnswer(this.state.vote))
	}

	getButtonType = (value) => {
		return value === 'Submit'
			? <button className='pole-button container-element'>{value}</button>
			: <Link to={`/question/${this.props.id}`}><button className='pole-button container-element'>{value}</button></Link>
	}
	getValue = (vote) => {
		return this.state.vote === vote
	}

	render() {
		const { id, authedUser, avatarURL, author, optionOne, optionTwo, buttonValue }  = this.props
		return (
			<div className='question-card container-element'>
				<h3 className='question-card-title container-element'>
				 {/* <div style={{ backgroundImage: `url(${avatarURL})` }} /> */}
					<img src={avatarURL} />
					<span>{author}</span>
				</h3>
				<div className="block-container">
					<div className='question-card-block container-element'>
						<h4 className='question-title'>Would You Rather...</h4>
						<div className='question-select'>
							<form action=''>
								<label htmlFor='option-one' className='question-option-label'>
									<input
										id='option-one'
										type='radio'
										name='option'
										value='optionOne'
										checked={this.getValue('optionOne')}
										onChange={(e) => this.handleClick(e)}
									/>
									{optionOne.text}
								</label>
								<label htmlFor='option-two' className='question-option-label'>
									<input
										id='option-two'
										type='radio'
										name='option'
										value='optionTwo'
										checked={this.getValue('optionTwo')}
										onChange={(e) => this.handleClick(e)}
									/>
									{optionTwo.text}
								</label>
							</form>
						</div>
					</div>
				</div>
				<div className="button-container">
				{/* @todo: OnChange populate with submit for new answer*/}
				{/* @todo: OnSubmit send to '/question/id' ? */}
					{this.getButtonType(buttonValue)}
				</div>
			</div>
		)
	}
}

export default QuestionPrev