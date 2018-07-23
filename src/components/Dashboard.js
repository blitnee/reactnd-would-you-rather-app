import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'

class Dashboard extends Component {
	render() {
		console.log(this.props)
		return (
			<div>
					<QuestionsList questions={this.props.questions} />
			</div>
		)
	}
}

function mapStateToProps ({ questions }) {
	return {
		questions: Object.keys(questions)
	}
}

export default connect(mapStateToProps)(Dashboard)