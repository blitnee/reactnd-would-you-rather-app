import { loginUser, logoutUser } from '../utils/api'

export const AUTH_SUCCESS = 'AUTH_SUCCESS',
			       AUTH_FAILURE = 'AUTH_FAILURE',
			       AUTH_LOGOUT = 'AUTH_LOGOUT'

export function login (user) {
  return (dispatch, getState) => {
    loginUser(user).then(
      user => {
        dispatch(authSuccess(user))
      },
      error => {
        dispatch(authFailure(error))
      }
    )
  }
}

export function logout () {
  return dispatch => {
    logoutUser()
    dispatch(authLogout())
  }
}

export function authSuccess(user) { return { type: AUTH_SUCCESS, user } }
export function authFailure(error) { return { type: AUTH_FAILURE, error } }
export function authLogout() { return { type: AUTH_LOGOUT } }
