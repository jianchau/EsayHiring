import {Map} from 'immutable'
import types from '../actionTypes'
const defaultState = Map({
    collapsed:false
})
const sideMenuReducer = (state = defaultState,action) => {
    switch(action.type){
        case types.CHANGE_COLLAPSED:
            {
                return state.set('collapsed',!state.get('collapsed'))
            }
            
        default:
            return state
    }
}

export default sideMenuReducer