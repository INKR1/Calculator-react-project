import {ADD_DIGIT, CHOOSE_OPERATION, CLEAR, DELETE_DIGIT, EVALUATE} from "../constants/mathActions";


export default function mathReducers(state , {type, payload}) {

    switch (type) {
        case ADD_DIGIT:
            if (state.overwrite) {
                return {
                  ...state,
                  currentValue: payload.digit,
                  overwrite: false
                }
              }
            if(payload.digit === '0' && state.currentValue === '0') {
                return state; 
            };
            
            if (payload.digit === '.' && state.currentValue.includes('.')) {
                return state;
            };
            
            return {
                ...state,
                currentValue: `${state.currentValue || ''}${payload.digit}`
            }; 

        case CLEAR:
            return{};

        case DELETE_DIGIT:
            if(state.overwrite) {
                return {
                    ...state,
                    currentValue: null,
                    overwrite: false
                };
            };
            if(state.currentValue === null) {
                return state;
            };
            if(state.currentValue.length === 1) {
                return { ...state, currentValue: null };
            };
            return {
                ...state,
                currentValue: state.currentValue.slice(0, -1)
            };

        case CHOOSE_OPERATION:
            if(state.currentValue == null && state.previousValue == null) {
                return state;
            };
            if(state.currentValue == null) {
                return {...state,
                    operation: payload.operation
                };
            };

            if (state.previousValue == null) {
                return {
                    ...state,
                    operation: payload.operation,
                    previousValue: state.currentValue,
                    currentValue: null
                };
            };

            return {
                ...state,
                previousValue: evaluate(state),
                operation: payload.operation,
                currentValue: null
            };
            case EVALUATE:
      if (
        state.operation == null ||
        state.currentValue == null ||
        state.previousValue == null
      ) {
        return state
      };

      return {
        ...state,
        overwrite: true,
        previousValue: null,
        operation: null,
        currentValue: evaluate(state),
      };
      default:
  };
};

function evaluate({ currentValue, previousValue, operation }) {
                const prev = parseFloat(previousValue);
                const current = parseFloat(currentValue);
                
                if (isNaN(prev) || isNaN(current)) 
                return '';
                let computation = '';

                // if (operation === '+/-') {
                //     if(current.charAt(0) === '-') {
                //         computation = current.substring(1)
                //     } else {
                //         computation = '-' + current
                //     }
                // }
                if(operation === '+') {
                    computation = prev + current
                } else if(operation === '-') {
                    computation = prev - current
                }else if(operation === '*') {
                    computation = prev * current
                }
                else if(operation === '÷') {
                    computation = prev / current
                }
              return computation.toString();
};
    