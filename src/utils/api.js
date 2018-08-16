import {
  _login,
  _logout,
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (info) {
  return _saveQuestion(info)
}

export function saveQuestionAnswer (info) {
  return _saveQuestionAnswer(info)
}

export function loginUser (username) {
  return _login(username)
    .then(
      user => {
        localStorage.setItem('user', JSON.stringify(user))
        return Promise.resolve(user)
      }
    )
}

export function logoutUser () {
  return _logout()
    .then(
      user => {
        localStorage.removeItem('user')
      }
    )
}
