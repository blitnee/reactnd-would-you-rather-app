import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionPrev from './QuestionPrev'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class QuestionsList extends Component {

	render() {
		const { unanswered, answered, users } = this.props
		return (
			<div className='container-content container-element'>
				<Tabs>
			    <TabList className='tab-list container-element'>
			      <Tab className='tab hover container-element'>
			      		 Unanswered</Tab>
			      <Tab className='tab hover container-element'>
			      		 Answered</Tab>
			    </TabList>
			    <TabPanel>
		      	{ unanswered.map((q) => {
				  		return <QuestionPrev
				  							key={q.id}
				  							id={q.id}
				  							author={q.author}
				  							avatar={users[q.author].avatarURL}
				  							optionOne={q.optionOne}
				  							optionTwo={q.optionTwo}
				  							buttonValue={'Submit'}
				  							/>})}
			    </TabPanel>
			    <TabPanel>
		      	{answered.map((q) => {
				  		return <QuestionPrev
				  							key={q.id}
				  							id={q.id}
				  							author={q.author}
				  							avatar={users[q.author].avatarURL}
				  							optionOne={q.optionOne}
				  							optionTwo={q.optionTwo}
				  							buttonValue={'Results'}
				  					/>})}
			    </TabPanel>
				</Tabs>
			</div>
		)
	}
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authed: authedUser.authenticated,
    authedUser: authedUser.loggedUserId,
    users
  }
}

export default connect(mapStateToProps)(QuestionsList)