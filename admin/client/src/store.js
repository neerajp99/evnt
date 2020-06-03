import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

// Initial state as an empty object 
const initalState = {}
// Adding thunnk middleware for async requests
const middleware = [thunk]
const composeEnhancers = window.__REDUX__DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	rootReducer,
	initalState,
	composeEnhancers(applyMiddleware(...middleware))
)
export default store