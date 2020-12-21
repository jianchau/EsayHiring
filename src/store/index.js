import {combineReducers} from 'redux-immutable'
import {createStore,applyMiddleware} from 'redux'
import sideMenuReducer from './modules/sideMenu'

const rootReducer = combineReducers({
    sideMenuReducer,
})
const store = createStore(rootReducer)
export default store
