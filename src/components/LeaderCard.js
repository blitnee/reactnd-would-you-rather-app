import React, { Component } from 'react'

class LeaderCard extends Component {
	render() {
		const { index, name, avatar, answers, questions, score } = this.props

		return (
			<div className='leader-card container-element'>
				<div className='leader-rank'>{index}</div>
				<div className='leader-info container-element'>
					<div className='leader-header container-element'>
						<img className='leader-avatar' src={avatar} alt='user avatar'/>
						<h3 className='leader-card-title'>{name}</h3>
					</div>
					<div className='leader-stats-container container-element'>
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