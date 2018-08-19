import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../utils/helpers'
import { PieChart, Pie, Sector, Cell, Tooltip } from 'recharts'

class Question extends Component {

	state = {
		question: {},
		user: {},
		votes: {},
	}

	componentWillMount() {
		const id = this.props.match.params.id
		const questions = Object.values(this.props.questions)
		const question = questions.filter((q) => q.id === id)
		this.setState({ question: question[0] }) // @todo: garbage... fix it
	}

	render () {
		const { question } = this.state

		console.log('question: ', question)

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
								<label htmlFor='option-one' className='question-option-label'>
									{/* @todo: Add border color for user's vote */}
									<input
										id='option-one'
										type='radio'
										// value={this.props.optionOne}
									/>
									{question.optionOne.text}
								</label>
								<label htmlFor='option-two' className='question-option-label'>
									<input
										id='option-two'
										type='radio'
										// value={this.props.optionTwo}
									/>
									{question.optionTwo.text}
								</label>
							</div>
						</div>
					</div>
		    	<PieChart width={250} height={250} onMouseEnter={this.onPieEnter}>
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
		)
	}
}

function mapStateToProps({ users, questions }) {
	return {
		users,
		questions,
	}
}

export default connect(mapStateToProps)(Question)