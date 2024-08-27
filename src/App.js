import React, { useState } from 'react';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('');

  const handleNum1Change = (e) => {
    setNum1(e.target.value);
  };

  const handleNum2Change = (e) => {
    setNum2(e.target.value);
  };

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  const calculate = () => {
    let result;
    switch (operation) {
      case '+':
        result = parseFloat(num1) + parseFloat(num2);
        break;
      case '-':
        result = parseFloat(num1) - parseFloat(num2);
        break;
      case '*':
        result = parseFloat(num1) * parseFloat(num2);
        break;
      case '/':
        result = parseFloat(num1) / parseFloat(num2);
        break;
      default:
        result = '';
    }
    setResult(result.toString());
  };

  return (
    <div>
      <h1>Калькулятор</h1>
      <input type="number" value={num1} onChange={handleNum1Change} />
      <select value={operation} onChange={handleOperationChange}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={handleNum2Change} />
      <button onClick={calculate}>Рассчитать</button>
      <p>Результат: {result}</p>
    </div>
  );
}

export default App;