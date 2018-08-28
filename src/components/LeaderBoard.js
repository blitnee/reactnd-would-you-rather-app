import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderCard from './LeaderCard'

class LeaderBoard extends Component {

	render() {
		const { users } = this.props
		const leaders = users.map((u)=> {
			let aTotal = Object.values(u.answers).length
			let qTotal = u.questions.length
			let score = aTotal + qTotal
			return {
				name: u.name,
				id: u.id,
				avatar: u.avatarURL,
				aTotal: aTotal,
				qTotal: qTotal,
				score: score
			}
		})
		return (
			<div className='leader-container container-content container-element'>
				{leaders.sort((a,b) => {
					return b.score - a.score
				}).map((u, index) => {
					index++
					return <LeaderCard
						key={u.id}
						index={index}
						name={u.name}
						avatar={u.avatar}
						answers={u.aTotal}
						questions={u.qTotal}
						score={u.score}/>
				})}
			</div>
		)
	}
}

function mapStateToProps ({ users }) {
	return {
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(LeaderBoard)
