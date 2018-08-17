import React, { Component } from 'react'
import { connect } from 'react-redux'

class NewQuestion extends Component {

	render() {
		return (
			<div>
				{/* @todo: Render New Question Card */}
				<h3>NEW QUESTION</h3>
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