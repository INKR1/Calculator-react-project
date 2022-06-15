import "./index.css";

function App() {
  return (
   <div className="calculator-grid">
     <div className="output">
        <div className="previous-operand">12 * </div>
        <div className="current-operand">34</div>
     </div>
      <button>AC</button>
      <button>+/-</button>
      <button>%</button>
      <button>÷</button>
      <button>9</button>
      <button>8</button>
      <button>7</button>
      <button>*</button>
      <button>6</button>
      <button>5</button>
      <button>4</button>
      <button>-</button>
      <button>3</button>
      <button>2</button>
      <button>1</button>
      <button>+</button>
      <button className="span-two">0</button>
      <button>,</button>
      <button>=</button>
   </div>
  );
}

export default App;
