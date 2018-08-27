import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleQuestionAnswer } from '../actions/questions'

class QuestionPrev extends Component {

	state = {
		vote: '',
		unanswered: false,
		showSubmit: false
	}

	componentDidMount() {
		if (this.props.optionOne.votes.includes(this.props.authedUser)) {
			this.setState({ vote: 'optionOne' })
		} else if (this.props.optionTwo.votes.includes(this.props.authedUser)) {
			this.setState({ vote: 'optionTwo' })
		} else {
			this.setState({ unanswered: true })
		}
	}

	handleRevote = (e) => {
		this.setState({ vote: e.target.value })
		this.state.unanswered === false && this.setState({ showSubmit: true })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		let info = {
			authedUser: this.props.authedUser,
			qid: this.props.id,
			answer: this.state.vote
		}
    this.props.dispatch(handleQuestionAnswer(info))
	}

	getButtonType = (value) => {
		return value === 'Submit'
			? <button onClick={(e) => this.handleSubmit(e)} className='pole-button hover container-element'>{value}</button>
			: <Link to={`/question/${this.props.id}`}><button className='pole-button hover container-element'>{value}</button></Link>
	}

	getValue = (vote) => {
		return this.state.vote === vote
	}

	render() {
		const { avatarURL, author, optionOne, optionTwo, buttonValue }  = this.props
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
						<form className='question-select' action=''>
							<label htmlFor='option-one' className='question-option-label'>
								<input
									id='option-one'
									type='radio'
									name='option'
									value='optionOne'
									checked={this.getValue('optionOne')}
									onChange={(e) => this.handleRevote(e)}
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
									onChange={(e) => this.handleRevote(e)}
								/>
								{optionTwo.text}
							</label>
						</form>
					</div>
				</div>
				<div className="button-container">
				{/* @todo: OnSubmit send to '/question/id' ? */}
				{this.state.showSubmit === true && <button onClick={(e) => this.handleSubmit(e)} className='pole-button container-element'>Resubmit</button>}
					{this.getButtonType(buttonValue)}
				</div>
			</div>
		)
	}
}

// export default QuestionPrev

function mapStateToProps ({ authedUser }) {
  return {
    authed: authedUser.authenticated,
    authedUser: authedUser.loggedUserId
  }
}

export default connect(mapStateToProps)(QuestionPrev)

