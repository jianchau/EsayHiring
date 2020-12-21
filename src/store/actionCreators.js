import types from './actionTypes'
export const changeCollapsed = ()=>{
    console.log(types.CHANGE_COLLAPSED);
    return {
        type:types.CHANGE_COLLAPSED
    }
}

