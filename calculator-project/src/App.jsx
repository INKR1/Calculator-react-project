import { useReducer } from 'react';
import  DigitButton  from './Components/DigitButton';
import  OperationButton  from './Components/OperationButton';
import  mathReducers  from './reducers/mathReducers';
import { CLEAR } from './constants/mathActions';
import "./index.css";

function App() {

  const [{currentValue, previousValue, operation}, dispatch] = useReducer(mathReducers,{});
  

  return (

   <div className="calculator-grid">
     <div className="output">
        <div className="previous-operand">{previousValue}{operation}</div>
        <div className="current-operand">{currentValue}</div>
     </div>
      <button className='span-two' onClick={() => dispatch({type: CLEAR})}>AC</button>
        <OperationButton operation='+/-' dispatch={dispatch}/>
        <OperationButton operation='%' dispatch={dispatch}/>
      <OperationButton operation="÷" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="4" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="1" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} className={'span-two rounded-bl'} />
      <DigitButton digit="." dispatch={dispatch}/>
      <button className="orange-btn rounded-br">=</button>
   </div>
  );
}

export default App;
