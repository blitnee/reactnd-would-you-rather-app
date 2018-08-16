import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'
import { authSuccess } from './authedUser'

export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users))
				dispatch(receiveQuestions(questions))
			})
      .then(() => {
        const loggedUser = localStorage.getItem('user')
        if (loggedUser) {
           dispatch(authSuccess(JSON.parse(loggedUser)))
        }
      })
	}
}
