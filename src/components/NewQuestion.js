import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {

	render() {
		return (
			<div className='container-content'>
				<div className='new-question-card container-element'>
					<div className='question-card-block container-element'>
						<h4 className='question-title'>Would You Rather...</h4>
						<div className='question-select'>
							<label htmlFor='option-one' className='question-input-label'>
								Option One:
								<input id='option-one' className='question-input' type='text' />
							</label>
							<label htmlFor='option-two' className='question-input-label'>
								Option Two:
								<input id='option-two' className='question-input' type='text' />
							</label>
						</div>
					</div>
					<div className="button-container">
						{/* @todo: Onclick save question */}
						<button className='submit-question-button hover container-element'>Submit</button>
					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps ({ questions }) {
	return {
		questions: Object.values(questions)
	}
}

export default connect(mapStateToProps)(NewQuestion)