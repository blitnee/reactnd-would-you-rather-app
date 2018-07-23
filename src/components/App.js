import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'

class App extends Component {

	componentDidMount() {
		this.props.dispatch(handleInitialData())
	}

  render() {
    return (
      <div className="App">
      		<Nav />
      		<div>
      			<Dashboard />
      		</div>
          { /* <div>
	          <Route path='/' exact component={Dashboard} />
	          <Route path='/question/:id' component={QuestionPage} />
	          <Route path='/signin' component={SignIn} />
	          <Route path='/leaders' component={LeaderBoard} />
	        </div> */}
      </div>
    );
  }
}

export default connect()(App)
