import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'

class NewQuestion extends Component {

  state = {
    optionOneText: '',
    optionTwoText: '',
		disableSubmit: true,
  }

  handleOptionOneChange = (e) => {
    const optionOneText = e.target.value
    this.setState(currentState => ({
      optionOneText,
      disableSubmit: optionOneText === '' || currentState.optionOneText === ''
    }))
  }

  handleOptionTwoChange = (e) => {
    const optionTwoText = e.target.value
    this.setState(currentState => ({
      optionTwoText,
      disableSubmit: optionTwoText === '' || currentState.optionOneText === ''
    }))
  }

  handleAddQuestion = (e) => {
  	e.preventDefault()
  	let optionOneText = this.state.optionOneText
  	let optionTwoText = this.state.optionTwoText
  	let author = this.props.authedUser
    this.props.dispatch(handleAddQuestion({ optionOneText, optionTwoText, author }))
    this.props.history.push('/')
  }

	render() {
		const { optionOneText, optionTwoText, disableSubmit } = this.state
		return (
			<div className='new-question-card'>
				<div className='question-card-block'>
					<h3 className='question-title'>Would You Rather...</h3>
					<form className='question-form'>
						<label htmlFor='option-one' className='question-input-label'>
							<input
								id='option-one'
								className='question-input'
								type='text'
								value={optionOneText}
								onChange={this.handleOptionOneChange}
								placeholder='Option One'
								/>
						</label>
            <p className="question-form-or">
              <span>OR</span>
            </p>
						<label htmlFor='option-two' className='question-input-label'>
							<input
								id='option-two'
								className='question-input'
								type='text'
								value={optionTwoText}
								onChange={this.handleOptionTwoChange}
								placeholder='Option Two'
								/>
						</label>
					</form>
				</div>
				<div className="button-container">
					<button
					  disabled={disableSubmit}
            type="submit"
            onClick={this.handleAddQuestion}
            className='submit-question-button hover'>Submit</button>
				</div>
			</div>
		)
	}
}

function mapStateToProps ({ authedUser, questions }) {
	return {
		questions: Object.values(questions),
		authedUser: authedUser.loggedUserId
	}
}

export default withRouter(connect(mapStateToProps)(NewQuestion))
