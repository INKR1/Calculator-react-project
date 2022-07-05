import { useReducer } from 'react';
import  DigitButton  from './Components/DigitButton';
import  OperationButton  from './Components/OperationButton';
import  mathReducers  from './reducers/mathReducers';
import { CLEAR, DELETE_DIGIT, EVALUATE } from './constants/mathActions';
import "./index.css";

function App() {

  const [{currentValue, previousValue, operation}, dispatch] = useReducer(mathReducers,{});
  
  const INTEGER_FORMATER = new Intl.NumberFormat('en-US', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });

  function formatNumber(number) {
    if(number == null) 
      return;
    const [integer, decimal] = number.split('.');
    if (decimal == null) 
      return INTEGER_FORMATER.format(integer);
    
    return `${INTEGER_FORMATER.format(integer)}.${decimal}`;
  };


  return (

   <div className="calculator-grid">
     <div className="output">
        <div className="previous-value">{formatNumber(previousValue)}{operation}</div>
        <div className="current-value">{formatNumber(currentValue)}</div>
     </div>
      <button className='span-two' onClick={() => dispatch({type: CLEAR})}>AC</button>
      <button onClick={() => dispatch({type: DELETE_DIGIT})}>DEL</button>
      {/* <OperationButton operation='+/-' dispatch={dispatch}/> */}
      <OperationButton operation='÷' dispatch={dispatch}/>
      <DigitButton digit="7" dispatch={dispatch}/>
      <DigitButton digit="8" dispatch={dispatch}/>
      <DigitButton digit="9" dispatch={dispatch}/>
      <OperationButton operation="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch}/>
      <DigitButton digit="5" dispatch={dispatch}/>
      <DigitButton digit="6" dispatch={dispatch}/>
      <OperationButton operation="-" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch}/>
      <DigitButton digit="2" dispatch={dispatch}/>
      <DigitButton digit="3" dispatch={dispatch}/>
      <OperationButton operation="+" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} className={'span-two rounded-bl'} />
      <DigitButton digit="." dispatch={dispatch}/>
      <button className="span-two" onClick={() => dispatch({type: EVALUATE})}>=</button>
   </div>
  );
};

export default App;
