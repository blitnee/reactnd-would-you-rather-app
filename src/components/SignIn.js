import React, { Component } from 'react'
import { connect } from 'react-redux'

class SignIn extends Component {
	render() {
		console.log(this.props.users)
		return (
			<div className='signin-container container-signIn'>
				<header className='signin-header container-element-con'>
					<p className='title container-element'>Would You Rather</p>
					<p className='subtitle container-element'>Please sign in to continue</p>
				</header>
				<div className='signin-image-container'>
				</div>
				<div className='signin-select-container'>
					<label htmlFor='userIds' className='signin-label'>Sign In</label>
					<select id='userIds' className='signin-select'>
						<option value='' className='select-placeholder'>Select User</option>
						{this.props.users.map((user) => {
							return <option key={user.id}>{user.name}</option>
						})}
					</select>
					</div>
					<div className='button-container'>
						<button className='signin-button container-element'>Sign In</button>
					</div>
			</div>
		)
	}
}

function mapStateToProps ({ users }) {

  return {
    users: Object.values(users)
  }
}


export default connect(mapStateToProps)(SignIn)