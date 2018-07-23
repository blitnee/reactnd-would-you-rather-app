import React from 'react'
// import { NavLink } from 'react-router-dom'

export default function Nav () {
	return (
		<nav className='nav container-nav'>
			<ul className='nav-items'>
				<span className='nav-items-left'>
					<li className='nav-item'>
							Home
					</li>
					<li className='nav-item'>
							New
					</li>
					<li className='nav-item'>
							Leaders
					</li>
				</span>
				<span className='nav-items-right'>
					{/* Add User greeting and avatar */}
					<li className='nav-item'>
						Hello, User
					</li>
					<li className='nav-item'>
							Logout
					</li>
				</span>
			</ul>
		</nav>
	)
}
