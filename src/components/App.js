import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as  Router, Route, Switch, Redirect } from 'react-router-dom'
import LoadingBar from 'react-redux-loading-bar'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import Question from './Question'
import LeaderBoard from './LeaderBoard'
import NewQuestion from './NewQuestion'
import SignIn from './SignIn'
import NotFound from './NotFound'
import PrivateRoute from '../utils/PrivateRoute'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    const { isAuthenticated, loading } = this.props
    return (
      <Router>
        <Fragment>
          {this.props.isAuthenticated && <Nav authedUser={this.props.authedUser} />}
          <LoadingBar />
            <Switch>
              <PrivateRoute
                path='/'
                exact
                component={ Dashboard }
                isAuthenticated={isAuthenticated} />
              <PrivateRoute
                path='/leaderboard'
                exact
                component={ LeaderBoard }
                isAuthenticated={isAuthenticated} />
              <PrivateRoute
                path='/question/:id'
                exact
                component={ Question }
                isAuthenticated={isAuthenticated} />
              <PrivateRoute
                path='/add'
                exact
                component={ NewQuestion }
                isAuthenticated={isAuthenticated} />
              <Route path='/signin' component={ SignIn } />
              <Route component={ NotFound } />
            </Switch>

        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser, loadingBar }) {
  return {
    isAuthenticated: authedUser.authenticated,
    authedUser: authedUser.loggedUserId,
    loading: loadingBar
  }
}

export default connect(mapStateToProps)(App)
