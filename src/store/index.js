import {combineReducers} from 'redux-immutable'
import {createStore,applyMiddleware} from 'redux'
import sideMenuReducer from './modules/sideMenu'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({
    sideMenuReducer,
})
const store = createStore(rootReducer,applyMiddleware(thunk))
export default store
