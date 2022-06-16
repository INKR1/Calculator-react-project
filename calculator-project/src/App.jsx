import "./index.css";

function App() {
  return (
   <div className="calculator-grid">
     <div className="output">
        <div className="previous-operand">12 * </div>
        <div className="current-operand">34</div>
     </div>
      <button className="dark-grey-btn">AC</button>
      <button className="dark-grey-btn">+/-</button>
      <button className="dark-grey-btn">%</button>
      <button className="orange-btn">÷</button>
      <button >9</button>
      <button>8</button>
      <button>7</button>
      <button className="orange-btn">*</button>
      <button>6</button>
      <button>5</button>
      <button>4</button>
      <button className="orange-btn">-</button>
      <button>3</button>
      <button>2</button>
      <button>1</button>
      <button className="orange-btn">+</button>
      <button className="span-two rounded-bl">0</button>
      <button>,</button>
      <button className="orange-btn rounded-br">=</button>
   </div>
  );
}

export default App;
