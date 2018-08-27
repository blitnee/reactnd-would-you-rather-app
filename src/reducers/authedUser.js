import { AUTH_SUCCESS, AUTH_FAILURE, AUTH_LOGOUT } from '../actions/authedUser'

const INITIAL_STATE = { authenticated: false, loggedUserId: '', error: '' };

export default function authentication(state = INITIAL_STATE, action) {
    switch (action.type) {
        case AUTH_SUCCESS:
            return { ...state, authenticated: true, loggedUserId: action.user.id };
        case AUTH_FAILURE:
            return { ...state, authenticated: false, loggedUserId: '', error: action.error };
        case AUTH_LOGOUT:
            return { ...state, authenticated: false, loggedUserId: '', error: '' };
        default:
          return state
    }
}