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
		questions.map((q) => {
			return q.optionOne.votes.concat(q.optionTwo.votes).includes(this.props.authedUser.loggedUserId)
				? answered.push(q)
				: unanswered.push(q)
		})
		this.setState({ answered: answered })
		this.setState({ unanswered: unanswered})
	}

	render() {
		const { unanswered, answered } = this.state
		const { authedUser, users } = this.props
		return (
			<QuestionsList
				unanswered={unanswered}
				answered={answered}
				authedUser={authedUser}
				users={users}
			/>
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