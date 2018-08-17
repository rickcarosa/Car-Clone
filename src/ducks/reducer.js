
const initialState = {
    yOffset: window.pageYOffset
}

const UPDATE_Y_OFFSET = 'UPDATE_Y_OFFSET'


export function updateYoffset(value){
    return{
        type: UPDATE_Y_OFFSET,
        payload: value
    }
}

export default function reducer(state = initialState, action){
    switch(action.type){
        case UPDATE_Y_OFFSET:
            return Object.assign({}, state, {yOffset: action.payload})
        default:
            return state;
    }
}