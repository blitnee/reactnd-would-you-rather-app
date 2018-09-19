import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'
import { authSuccess } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

export function handleInitialData () {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(hideLoading())
			}).then(() => {
        const loggedUser = localStorage.getItem('user')
        if (loggedUser) {
          dispatch(authSuccess(JSON.parse(loggedUser)))
        }
      })
	}
}
