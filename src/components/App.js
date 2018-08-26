import React, { Component, Fragment } from 'react'
import { BrowserRouter as  Router, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
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

  displayNav() {
    if(this.props.authed) {
      return <Nav authedUser={this.props.authedUser} />
    }
  }

  render() {
    const { authed } = this.props
    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        authed === true
          ? <Component {...props} />
          : <Redirect to='/signin' />
      )}/>
    )
    return (
      <Router>
        <Fragment>
          {/* <LoadingBar /> */}
          {this.displayNav()}
          <Switch>
            <Route path='/signin' component={ SignIn } />
            <PrivateRoute path='/' exact component={ Dashboard } />
            <PrivateRoute path='/leaderboard' component={ LeaderBoard } />
            <PrivateRoute path='/question/:id' component={ Question } />
            <PrivateRoute path='/add' component={ NewQuestion } />
            <Route component={NotFound} />
          </Switch>
        </Fragment>
      </Router>
    )
  }

}

function mapStateToProps ({ authedUser }) {
  return {
    authed: authedUser.authenticated,
    authedUser: authedUser.loggedUserId
  }
}

export default connect(mapStateToProps)(App)
