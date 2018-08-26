import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as  Router, Route, Redirect } from 'react-router-dom'
import { login } from '../actions/authedUser'

class SignIn extends Component {
	state = {
		userId: '',
	}
	setUser = (userId) => {
		this.setState({ userId })
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.dispatch(login(this.state.userId))
	}
	render() {
		const { authedUser } = this.props
		return (
			<div className='signin-container container-signIn'>
			{ authedUser.authenticated
				? <div>Welcome back {authedUser.loggedUserId}!</div>
				: <div>
					<header className='signin-header container-element-con'>
						<p className='title container-element'>Would You Rather</p>
						<p className='subtitle container-element'>Please sign in to continue</p>
					</header>
					<div className='signin-image-container'>
					</div>
					<div className='signin-select-container'>
						<label htmlFor='userIds' className='signin-label'>Sign In</label>
						<select id='userIds' className='signin-select' onChange={(e) => this.setUser(e.target.value)}>
							<option value='' className='select-placeholder'>Select User</option>
							{/* @todo: Add Avatar */}
							{this.props.users.map((user) => {
								return <option key={user.id} value={user.id} style={{backgroundImage: `url(${user.avatarURL})`}}>
												{user.name}
											 </option>
							})}
						</select>
						</div>
						<div className='button-container'>
							<button className='signin-button container-element' disabled={ this.state.userId === '' } onClick={this.handleSubmit}>Sign In</button>
						</div>
					</div>
			}

			</div>
		)
	}
}

function mapStateToProps ({ users, authedUser }) {
  return {
    users: Object.values(users),
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(SignIn)