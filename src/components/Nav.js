import React from 'react'
// import { NavLink } from 'react-router-dom'

export default function Nav () {
	return (
		<nav className='nav container-nav'>
			<ul className='nav-items'>
				<li className='nav-item'>
						Home
				</li>
				<li className='nav-item'>
						New Question
				</li>
				<li className='nav-item'>
						Leader Board
				</li>
				{/* Add User greeting and avatar */}
				<li className='nav-item'>
					Hello, authedUser
				</li>
				<li className='nav-item'>
						Logout
				</li>
			</ul>
		</nav>
	)
}
