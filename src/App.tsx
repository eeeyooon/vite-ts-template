import { useState } from 'react';
import './styles/_main.scss';

function App() {
  const [count, setCount] = useState(0);

  const PlusCount = () => {
    setCount(count + 1);
  };

  const MinusCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <span onClick={MinusCount}>-</span>
      <span>{count}</span>
      <span onClick={PlusCount}>+</span>
    </div>
  );
}

export default App;
