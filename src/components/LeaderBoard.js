import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {

	render() {
		return (
			<div>
				{/* @todo: Render Leader Card Component per leader */}
				<h3>LEADER BOARD</h3>
			</div>
		)
	}
}

function mapStateToProps ({ questions, users }) {
	return {
		questions: Object.values(questions),
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(LeaderBoard)