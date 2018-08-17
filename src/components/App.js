import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Question from './Question'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <Router>
        <Fragment>
          {/* <LoadingBar /> */}
          <div className="App">
            {this.props.authed === false
              ? <SignIn />
              : <div className='container'>
                  <Nav />
                  <Route path='/' exact component={ Dashboard } />
                  <Route path='/leaders' component={ LeaderBoard } />
                  <Route path='/question/:id' component={ Question } />
                  <Route path='/new' component={ NewQuestion } />
                </div>
              }
          </div>
        </Fragment>
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
