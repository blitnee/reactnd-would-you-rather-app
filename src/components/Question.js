import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'

class Question extends Component {
	render () {
		console.log(this.props)
		return (
			<div className='question'>
				<h3>QUESTION</h3>
			</div>
		)
	}
}

function mapStateToProps({ authedUser, users, questions }) {


	return {
		authedUser,
		question: questions
	}
}

export default connect(mapStateToProps)(Question)