import { getInitialData } from '../utils/api'
import { receiveQuestions } from '../actions/questions'
import { receiveUsers } from '../actions/users'
import { setAuthedUser } from '../actions/authedUser'

export function handleInitialData () {
	return (dispatch) => {
		return getInitialData()
			.then(({ users, questions }) => {
				dispatch(receiveUsers(users))
				dispatch(setAuthedUser(''))
				dispatch(receiveQuestions(questions))
			})
	}
}

export function handleSetAuthedUser (id) {
	return (dispatch) => {
		dispatch(setAuthedUser(id))
	}
}