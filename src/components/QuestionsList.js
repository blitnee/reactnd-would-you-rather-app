import React, { Component } from 'react'
import QuestionPrev from './QuestionPrev'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class QuestionsList extends Component {

	// @todo: Return the avatarURL for the user corresponding to the question author
	getAvatar (author) {
		this.props.users.filter((u) => {
			if(u.id === author) {
				return u.avatarURL
			}
		})
	}

	render() {
		{/* @todo: Add button prop for vote or pole functionality */}
		return (
			<div className='questions-list container-qlist'>
			<Tabs>
		    <TabList className='tab-list container-element'>
		      <Tab className='tab container-qlist'>Unanswered Questions</Tab>
		      <Tab className='tab container-qlist'>Answered Questions</Tab>
		    </TabList>

				{/* @todo: Lists based on user unanswered */}
		    <TabPanel>
	      	{this.props.questions.map((q) => {
			  		return <QuestionPrev key={q.id} author={q.author} optionOne={q.optionOne.text} optionTwo={q.optionTwo.text} />
			  	})}
		    </TabPanel>
		    <TabPanel>
	      	{this.props.questions.map((q) => {
			  		return 'this works...'
			  	})}
		    </TabPanel>
			</Tabs>
			</div>
		)
	}
}

export default QuestionsList