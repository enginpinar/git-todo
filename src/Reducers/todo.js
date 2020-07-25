import { ADD_TODO_ELEMENT, DELETE_TODO_ELEMENT } from "../Actions/types";
import shortid from 'shortid';
import findIndex from 'lodash/findIndex';

export  default (state= [], action= {}) => {
    switch (action.type) {
        case ADD_TODO_ELEMENT:
            return [
                ...state,
                {
                    id: shortid.generate(),
                    type: action.message.type,
                    text: action.message.text
                }
            ];
        case DELETE_TODO_ELEMENT:
            const index = findIndex(state, {id: action.id});
            if(index >= 0){
                return [
                    ...state.slice(0, index),
                    ...state.slice(index + 1)
                ];
            }
            return state;
        default: return state;
    }
}