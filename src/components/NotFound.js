import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
	return (
		<div className='not-found-container container-element'>
			<h1 className='not-found-error'>404</h1>
			<h2 className='not-found-title'>Page Not Found</h2>
			<Link to="/"><p className='not-found-link'>&larr; Back to the App</p></Link>
		</div>
	)
}

export default NotFound