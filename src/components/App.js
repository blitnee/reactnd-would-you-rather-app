import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Question from './Question'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn'
import NotFound from './NotFound'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    const { isAuthenticated, loading } = this.props
    return (
      <Router>
        <Fragment>
          <Nav />
          <LoadingBar />
            {loading.default === 1
              ? null
              : (isAuthenticated
                ? (<Switch>
                    <Route
                      path='/'
                      exact
                      component={ Dashboard } />
                    <Route
                      path='/leaderboard'
                      exact
                      component={ LeaderBoard } />
                    <Route
                      path='/question/:id'
                      exact
                      component={ Question } />
                    <Route
                      path='/add'
                      exact
                      component={ NewQuestion } />
                    <Route component={ NotFound } />
                  </Switch>)
                : <Route component={ SignIn } />
              )}
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, loadingBar }) {
  return {
    isAuthenticated: authedUser.authenticated,
    loading: loadingBar
  }
}

export default connect(mapStateToProps)(App)
