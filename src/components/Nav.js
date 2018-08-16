import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import { logout } from '../actions/authedUser'

class Nav extends Component {
	state = {

	}
	handleLogout = (e) => {
		return (e) => this.props.dispatch(logout())
	}
	render () {
		return (
			<nav className='nav container-nav'>
				<ul className='nav-items'>
					<span className='nav-items-left'>
						<li className='nav-item'>Home</li>
						<li className='nav-item'>New</li>
						<li className='nav-item'>Leaders</li>
					</span>
					<span className='nav-items-right'>
						<li className='nav-item'>
							{/* @todo: Add avatar */}
							Hello, {this.props.authedUser.loggedUserId}</li>
						<li className='nav-item nav-no-pad'
								onClick={this.handleLogout()}>
							{/* @todo: Click to show Logout */}
							Logout</li>
					</span>
				</ul>
			</nav>
		)
	}
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Nav)