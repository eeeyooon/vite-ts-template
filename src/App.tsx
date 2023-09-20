import { useState } from 'react';
import './styles/_main.scss';
import IMAGES from '../public/assets/images';
import react from '/public/assets/react.svg';

function App() {
  const [count, setCount] = useState(0);

  const PlusCount = () => {
    setCount((prevNum) => prevNum + 1);
  };

  const MinusCount = () => {
    setCount((prevNum) => prevNum - 1);
  };

  return (
    <div>
      <div>
        <span onClick={MinusCount}>-</span>
        <span>{count}</span>
        <span onClick={PlusCount}>+</span>
      </div>
      <img src={IMAGES.loopy1} alt="화이팅 루피" />
      <img src="/assets/fighting_loopy.png" alt="화이팅 루피" />
      <img src={react} alt="리액트 로고" />
    </div>
  );
}

export default App;
