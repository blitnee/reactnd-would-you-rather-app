import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class NotFound extends Component {

	render() {
		return (
			<div className='not-found-container container-element'>
				<h1 className='not-found-error'>404</h1>
				<h2 className='not-found-title'>Page Not Found</h2>
				<Link to="/"><p className='not-found-link'>&larr; Back to the App</p></Link>
			</div>
		)
	}
}

function mapStateToProps ({ questions, users }) {
	return {
		questions: Object.values(questions),
		users: Object.values(users)
	}
}

export default connect(mapStateToProps)(NotFound)
