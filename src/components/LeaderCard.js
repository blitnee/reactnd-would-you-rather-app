import React, { Component } from 'react'

class LeaderCard extends Component {
	render() {
		const { name, index, answers, questions, score } = this.props
		return (
			<div className='leader-card container-element'>
				<div className='leader-rank'>{index}</div>
				<div className='leader-info'>
					<div className='leader-header'>
						<img src='avatar' alt='user avatar'/>
						<h3 className='leader-card-title'>{name}</h3>
					</div>
					<div className='leader-stats-container'>
						<div className='leader-score'>Score: {score}</div>
						<div className='leader-answer-stats'>Answers: {answers}</div>
						<div className='leader-question-stats'>Questions: {questions}</div>
					</div>
				</div>
			</div>
		)
	}
}

export default LeaderCard