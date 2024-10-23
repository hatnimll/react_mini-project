import { useState } from 'react';
import './App.css';

function App() {
  const [inputNum, setInputNum] = useState('');
  const [result, setResult] = useState(0);
  return (
    <div className="container">
      <input
        className="input"
        type="number"
        value={inputNum}
        placeholder="숫자를 입력하세요"
        onChange={(event) => {
          setInputNum(Number(event.target.value));
        }}
      />
      <div>
        <button
          onClick={() => {
            setResult((prev) => prev + inputNum);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setResult((prev) => prev - inputNum);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setResult((prev) => prev * inputNum);
          }}
        >
          *
        </button>
        <button
          onClick={() => {
            setResult((prev) => prev / inputNum);
          }}
        >
          /
        </button>
        <button
          onClick={() => {
            setResult((prev) => prev % inputNum);
          }}
        >
          %
        </button>
      </div>
      <p>계산결과: {result}</p>
    </div>
  );
}

export default App;
