import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { NavLink } from 'react-router-dom'
import { logout } from '../actions/authedUser'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

class Nav extends Component {

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
						<Dropdown removeElement>
              <DropdownTrigger>
              	<li className='nav-item'>
									{/* @todo: Add avatar */}
									Hello, {this.props.authedUser.loggedUserId}
								</li>
							</DropdownTrigger>
              <DropdownContent>
              	<ul>
									<li className='nav-item nav-no-pad'
											onClick={this.handleLogout()}>
											Logout
									</li>
								</ul>
              </DropdownContent>
            </Dropdown>
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