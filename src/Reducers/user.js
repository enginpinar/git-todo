import { SET_CURRENT_USER, DELETE_CURRENT_USER, INVALID_USER } from "../Actions/types";
import findIndex from 'lodash/findIndex';


export  default (state= [], action= {}) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return [
                ...state
            ];
        case DELETE_CURRENT_USER:
            const index = findIndex(state, {id: action.id});
            if(index >= 0){
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }
            return state;
        case INVALID_USER:
            return 'state';
        default: return state;
    }
}