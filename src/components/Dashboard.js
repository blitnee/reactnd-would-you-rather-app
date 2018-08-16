import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'

class Dashboard extends Component {

	state = {
		unanswered: [],
		answered: []
	}

	componentDidMount = () => {
		const questions = this.props.questions
		questions.sort(function(a, b) {
			return a.timestamp - b.timestamp
		})

		let answered = []
		let unanswered = []
		console.log(this.props.questions)
		questions.map((q) => {
			q.optionOne.votes.concat(q.optionTwo.votes).includes(this.props.authedUser.loggedUserId)
				? answered.push(q)
				: unanswered.push(q)
		})
		this.setState({ answered: answered })
		this.setState({ unanswered: unanswered})
	}

	userVote = () => {
		// Change State of user's vote
	}

	handleSubmit = () => {
		// Handle form submission
	}

	render() {
		const { unanswered, answered } = this.state
		const { authedUser, users } = this.props
		return (
			<div>
				<QuestionsList
					unanswered={unanswered}
					answered={answered}
					authedUser={authedUser}
					users={users}
					onHandleSubmit={this.handleSubmit}
					onUserVote={this.userVote}
				/>
			</div>
		)
	}
}

function mapStateToProps ({ questions, authedUser, users }) {
	return {
		questions: Object.values(questions),
		authedUser: authedUser,
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(Dashboard)