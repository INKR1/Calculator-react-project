import {ADD_DIGIT, CLEAR} from "../constants/mathActions";

export default function mathReducers(state , {type, payload}) {


    switch (type) {
        case ADD_DIGIT:
            if(payload.digit === '0' && state.currentValue === '0') {
                return state; 
            }
            
            if (payload.digit === ',' && state.currentValue.includes(',')) {
                return state;
            }
            
            return {
                ...state,
                currentValue: `${state.currentValue || ""}${payload.digit}`
            }; 

        case CLEAR:
            return{};
            
        default:
        }
    };  
