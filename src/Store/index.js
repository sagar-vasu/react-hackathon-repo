import { createStore, applyMiddleware } from 'redux'
import allReducer from './Reducers'
import thunk from 'redux-thunk'


export default createStore(allReducer, applyMiddleware(thunk))

