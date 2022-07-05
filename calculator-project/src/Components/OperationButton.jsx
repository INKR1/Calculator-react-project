import {CHOOSE_OPERATION} from "../constants/mathActions";

export default function OperationButton({ dispatch, operation }) {
    return (
        <button className="orange-btn" onClick={() => dispatch({ type: CHOOSE_OPERATION, payload:{ operation }})}> {operation} </button>
    );
};