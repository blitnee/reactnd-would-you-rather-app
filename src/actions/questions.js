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

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question
  }
}

export function answerQuestion (info) {
	return {
		type: ANSWER_QUESTION,
		info
	}
}

export function handleAddQuestion(info) {
  console.log('handleAddQuestion: ', info)
  return dispatch => {
    dispatch(showLoading())
    saveQuestion(info)
      .then(question => {
        dispatch(addQuestion(question))
        dispatch(hideLoading())
      })
      .catch(e => {
        dispatch(hideLoading())
        console.warn('Error in handleAddQuestion: ', e)
        alert('There was an error adding the question. Try again.')
      })
  }
}

export function handleAnswerQuestion (info) {
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