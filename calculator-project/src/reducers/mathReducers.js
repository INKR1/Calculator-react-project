import {ADD_DIGIT} from "../constants/mathActions";

export default function mathReducers(state , {type, payload}) {
    switch (type) {
        case ADD_DIGIT:
            return {
                ...state,
                currentValue: `${state.currentValue || ""}${payload.digit}`,
            }; 
        default:
    }
}   
