import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../actions/authedUser'
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown'

class Nav extends Component {

	handleLogout = (e) => {
		return (e) => this.props.dispatch(logout())
	}
	render () {
		return (
			<nav className='nav container-nav'>
				<div className='nav-items'>
					<span className='nav-items-left'>
						<Link to='/' className='nav-item'>Home</Link>
						<Link to='/new' className='nav-item'>New</Link>
						<Link to='/leaders' className='nav-item'>Leaders</Link>
					</span>
					<span className='nav-items-right'>
						<Dropdown removeElement>
              <DropdownTrigger>
              	<span className='nav-item'>
									{/* @todo: Add avatar */}
									Hello, {this.props.authedUser.loggedUserId}	&#9662;
								</span>
							</DropdownTrigger>
              <DropdownContent>
              	<ul className='drop-list'>
									<li className='drop-item'
											onClick={this.handleLogout()}>
											Logout
									</li>
								</ul>
              </DropdownContent>
            </Dropdown>
					</span>
				</div>
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