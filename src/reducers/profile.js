import { CHANGE_NAME } from '../actions/profile'

const initialState = {
    name: 'John',
    age: 27,
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_NAME: {
            return {
                ...state,
                name: action.payload.name,
            }
        }
        default:
            return state
    }
}
