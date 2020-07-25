import {INVALID_USER, SET_CURRENT_USER} from "./types";

export function LoginFunc(data) {
    if(data.username === 'kfein' && data.password === '112233'){
        return {
            type: SET_CURRENT_USER,
            user : {
                username: data.username,
                password: data.password
            }
        }
    }else{
        return {
            type: INVALID_USER,
            message: 'Invalid User'
        }
    }

}