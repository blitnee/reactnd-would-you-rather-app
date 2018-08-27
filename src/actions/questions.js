import { saveQuestion, saveQuestionAnswer } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading-bar';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

export function receiveQuestions (questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	}
}

export function answerQuestion (info) {
	return {
		type: ANSWER_QUESTION,
		info
	}
}

export function handleQuestionAnswer (info) {
  return dispatch => {
    dispatch(showLoading())
    saveQuestionAnswer(info)
      .then(() => {
        dispatch(answerQuestion(info))
        dispatch(hideLoading())
      })
      .catch(e => {
        dispatch(hideLoading())
        console.warn('Error in handleAnswerQuestion: ', e)
        alert('There was an error answering the question. Try again.')
      })
  }
}