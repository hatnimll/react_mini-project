import { useState } from 'react';
import './App.css';

function App() {
  const [inputNumber, setInputNum] = useState('');
  const [result, setResult] = useState(0);
  const operators = ['+', '-', '*', '/', '%'];

  const handleCalculate = (operator) => {
    switch (operator) {
      case '+':
        setResult((prev) => prev + inputNumber);
        break;
      case '-':
        setResult((prev) => prev - inputNumber);
        break;
      case '*':
        setResult((prev) => prev * inputNumber);
        break;
      case '/':
        setResult((prev) => prev / inputNumber);
        break;
      case '%':
        setResult((prev) => prev % inputNumber);
        break;
    }
  };

  return (
    <div className="container">
      <input
        className="input"
        type="number"
        value={inputNumber}
        placeholder="숫자를 입력하세요"
        onChange={(event) => {
          setInputNum(Number(event.target.value));
        }}
      />
      <div>
        {operators.map((operator) => (
          <button key={operator} onClick={() => handleCalculate(operator)}>
            {operator}
          </button>
        ))}
      </div>
      <p>계산결과: {result}</p>
    </div>
  );
}

export default App;
