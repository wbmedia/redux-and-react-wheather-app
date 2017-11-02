import { FETCH_WEATHER } from '../actions/index';
export default function(state = [] , action) {
    switch (action.type) {
        case FETCH_WEATHER :
        // traditional JS Syntax   
        //return state.concat([action.payload.data]); return the same below
        return [action.payload.data, ...state];// ES6 Syntax
    }

    return state;
    
}