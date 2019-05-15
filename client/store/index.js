import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import scrapbooks from './scrapbooks'
import content from './content'
import currentMedia from './currentMedia'
import currentText from './currentText'

const reducer = combineReducers({user, scrapbooks, content, currentMedia, currentText})
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './scrapbooks'
export * from './content'
