import { combineReducers } from 'redux'

const screen = (state ={}, action) => {
	switch(action.type) {
		case 'MOVE_SCREEN':
			let newState = {...state}
			return 
		default:
			return state
	}
}

const plaid = (state = {}, action) => {
	switch(action.type) {
		case 'RECIEVE_HANDLER':
			let newState = {...state, handler: action.handler}
			return newState
		default: 
			return state
	}
}

export default combineReducers({
	screen,
	plaid
})