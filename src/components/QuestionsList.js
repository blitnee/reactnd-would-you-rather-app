import React, { Component } from 'react'
import QuestionPrev from './QuestionPrev'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class QuestionsList extends Component {

	getAvatar (author) {
		let user = this.props.users.filter((u) => {
			return u.id === author.author
		})
		return user[0].avatarURL // @todo: Fix this.
	}

	render() {
		const { unanswered, answered, users } = this.props
		return (
			<div className='questions-list container-qlist'>
				<Tabs>
			    <TabList className='tab-list container-element'>
			      <Tab className='tab container-qlist'>
			      		 Unanswered Questions</Tab>
			      <Tab className='tab container-qlist'>
			      		 Answered Questions</Tab>
			    </TabList>
			    <TabPanel>
		      	{ unanswered.map((q) => {
				  		return <QuestionPrev
				  							key={q.id}
				  							id={q.id}
				  							author={q.author}
				  							avatarURL={this.getAvatar(q)}
				  							optionOne={q.optionOne.text}
				  							optionTwo={q.optionTwo.text}
				  							onHandleSubmit={this.props.onHandleSubmit}
				  							onChange={this.props.onUserVote}
				  							buttonValue={'Submit'}
				  							/>})}
			    </TabPanel>
			    <TabPanel>
		      	{answered.map((q) => {
				  		return <QuestionPrev
				  							key={q.id}
				  							id={q.id}
				  							users={users}
				  							author={q.author}
				  							avatarURL={this.getAvatar(q)}
				  							optionOne={q.optionOne.text}
				  							optionTwo={q.optionTwo.text}
				  							buttonValue={'Results'}
				  					/>})}
			    </TabPanel>
				</Tabs>
			</div>
		)
	}
}

export default QuestionsList