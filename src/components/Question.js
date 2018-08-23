import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts'

class Question extends Component {

	state = {
		question: {},
		vote: {},
	}

	componentWillMount() {
		const id = this.props.match.params.id
		const questions = Object.values(this.props.questions)
		const question = questions.filter((q) => q.id === id)
		this.setState({ question: question[0] }) // @todo: garbage... fix it
		if(question[0].optionOne.votes.includes(this.props.authedUser)){
			this.setState({ vote: 'optionOne' })
		} else if (question[0].optionTwo.votes.includes(this.props.authedUser)) {
			this.setState({ vote: 'optionTwo' })
		}
	}

	getVotes = () => {
		let votes = ((this.state.question.optionOne.votes.length) +
								(this.state.question.optionTwo.votes.length))
		return votes
	}
	getValue = (votes) => {
		return votes.includes(this.props.authedUser)
	}

	render () {
		const { question, vote } = this.state
		const data = [
			{name: question.optionOne.text, value: question.optionOne.votes.length},
			{name: question.optionTwo.text, value: question.optionTwo.votes.length}]
		const COLORS = ['#0088FE', '#00C49F']
		const RADIAN = Math.PI / 180;
		const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
		 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
		  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
		  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
		  return (
		    <text
		    	x={x}
		    	y={y}
		    	fill="white"
		    	textAnchor={x > cx ? 'start' : 'end'}
		    	dominantBaseline="central">
		    	{`${(percent * 100).toFixed(0)}%`}
		    </text>
		  )
		}

		return (
			<div className='question-card-container container-element'>
				<div className='question-card container-element'>
					<h3 className='question-card-title container-element'>
						<span>{question.author}</span>
					</h3>
					<div className="block-container">
						<div className='question-card-block container-element'>
							<h4 className='question-title'>Would You Rather...</h4>
							<div className='question-select'>
								<span className='option-one'>
									<label htmlFor='option-one' className='question-option-stat-label'>
										{/* @todo: Add border color for user's vote */}
										<input
											id='option-one'
											type='radio'
											checked={this.getValue(question.optionOne.votes)}
											readOnly
										/>
										{question.optionOne.text}
									</label>
									{vote === 'optionOne'
										? <div className='vote-icon'><p className='vote-text'>&#9733;</p></div>
										: null
									}
								</span>
								<span className='option-two'>
									<label htmlFor='option-two' className='question-option-stat-label'>
										<input
											id='option-two'
											type='radio'
											checked={this.getValue(question.optionTwo.votes)}
											readOnly
										/>
										{question.optionTwo.text}
									</label>
									{vote === 'optionTwo'
										? <div className='vote-icon'><p className='vote-text'>&#9733;</p></div>
										: null
									}
								</span>
							</div>
						</div>
					</div>
					<div className='results-block container-element'>
						<h3 className='pole-results-title'>Results</h3>
						<hr/>
						<p className='vote-count'>Based on {this.getVotes()} voters</p>
			    	<PieChart width={250} height={200} onMouseEnter={this.onPieEnter}>
			        <Pie
			          data={data}
			          dataKey='value'
			          cx={100}
			          cy={100}
			          labelLine={false}
			          label={renderCustomizedLabel}
			          outerRadius={80}
			          fill="#8884d8">
			        	{ data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)}
			        </Pie>
			        <Tooltip cursor={false} />
			      </PieChart>
			     </div>
				</div>
			</div>
		)
	}
}

function mapStateToProps({ questions, authedUser }) {
	return {
		questions,
		authedUser: authedUser.loggedUserId
	}
}

export default connect(mapStateToProps)(Question)