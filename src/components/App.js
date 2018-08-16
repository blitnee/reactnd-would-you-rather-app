import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import SignIn from './SignIn'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <Router>
        <div className="App">
          {this.props.authed === false
            ? <SignIn />
            : <div className='container'>
                <Nav />
                <Route path='/' exact component={ Dashboard } />
              </div>
            }
        </div>
      </Router>
    )
  }

}

function mapStateToProps ({ authedUser }) {
  return {
    authed: authedUser.authenticated
  }
}

export default connect(mapStateToProps)(App)
