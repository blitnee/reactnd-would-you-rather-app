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
		const { authedUser, avatar } = this.props
		return (
			<nav className='nav container-nav'>
				<div className='nav-items'>
					<div className='nav-items-left'>
						<Link to='/' className='nav-item hover'>Home</Link>
						<Link to='/add' className='nav-item hover'>New</Link>
						<Link to='/leaderboard' className='nav-item hover'>Leaders</Link>
					</div>
					<div className='nav-items-right'>
						<Dropdown removeElement>
              <DropdownTrigger>
              	<div className='nav-user'>
	                <img className='nav-avatar' src={avatar} alt='user avatar'/>
	              	<div className='nav-item hover'>Hello, {authedUser}	&#9662;</div>
	              </div>
							</DropdownTrigger>
              <DropdownContent>
              	<ul className='drop-list'>
									<li className='drop-item hover'
											onClick={this.handleLogout()}>
											Logout
									</li>
								</ul>
              </DropdownContent>
            </Dropdown>
					</div>
				</div>
			</nav>
		)
	}
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser.loggedUserId,
    avatar: authedUser.authedAvatar
  }
}

export default connect(mapStateToProps)(Nav)
