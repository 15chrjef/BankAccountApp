import React from 'react'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Reducer from '../store/reducers/reducer'
import App from './appContainer'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const store = createStoreWithMiddleware(Reducer)

export default class AppContainer extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<App/>
			</Provider>
		)
	}
}