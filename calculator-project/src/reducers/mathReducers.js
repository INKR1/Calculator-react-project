import {ADD_DIGIT, CHOOSE_OPERATION, CLEAR} from "../constants/mathActions";


export default function mathReducers(state , {type, payload}) {

    switch (type) {
        case ADD_DIGIT:
            if(payload.digit === '0' && state.currentValue === '0') {
                return state; 
            };
            
            if (payload.digit === '.' && state.currentValue.includes('.')) {
                return state;
            };
            
            return {
                ...state,
                currentValue: `${state.currentValue || ""}${payload.digit}`
            }; 

        case CLEAR:
            return{};

        case CHOOSE_OPERATION:
            if(state.currentValue == null && state.previousValue == null) {
                return state;
            };
            if(state.currentValue == null) {
                return {...state,
                    operation: payload.operation
                }
            }

            if (state.previousValue == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousValue: state.currentValue,
                    currentValue: null,
                }
            }

            return {
                ...state,
                previousValue: evaluate(state),
                operation: payload.operation,
                currentValue: null,
            }

            function evaluate({ currentValue, previousValue, operation }) {
                const prev = parseFloat(previousValue);
                const current = parseFloat(currentValue);
                
                if (isNaN(prev) || isNaN(current)) 
                return ""
                let computation = ""
                
                switch (operation) {
                  case "+":
                    computation = prev + current
                    break;
                  case "-":
                    computation = prev - current
                     break;
                  case "*":
                    computation = prev * current
                     break;
                  case "÷":
                    computation = prev / current
                    break;
                    default:
                      break;
                };
              return computation.toString()
            }

        default:
        };
    };  

    