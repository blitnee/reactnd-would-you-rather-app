import React, { Component } from 'react'
import QuestionPrev from './QuestionPrev'

class QuestionsList extends Component {
	render() {
		console.log(this.props.questions)
		return (
			<div className='questions-list container-qlist'>
				<div id="unanswered-questions-tab" className="tabcontent">
				  <h2>Unanswered Questions</h2>
				{/* @todo: List based on user unanswered */}
				  	{this.props.questions.map((id) => {
				  		return <QuestionPrev key={id} />
				  	})}
				</div>
				<div id="answered-questions-tab" className="tabcontent">
				  <h2>Answered Questions</h2>
				{/* @todo: List based on user answered */}
				  	{this.props.questions.map((id) => {
				  		return <QuestionPrev key={id} />
				  	})}
				</div>
			</div>
		)
	}
}

export default QuestionsList