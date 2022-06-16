import {ADD_DIGIT,  CHOOSE_OPERATION, CLEAR, EVALUATE} from "../constants/mathActions";

export function addDigit(digit) {
    return {
        type: ADD_DIGIT,
        payload: digit
    }
}

export function chooseOperation(operation) {
    return {
        type: CHOOSE_OPERATION,
        payload: operation
    }
}

export function clear() {
    return {
        type: CLEAR
    }
}

export function evaluate() {
    return {
        type: EVALUATE
    }
}
