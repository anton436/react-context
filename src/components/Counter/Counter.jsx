import React, { useContext } from 'react';
import { counterContext } from '../../CounterContext';

const Counter = () => {
  const { counter, increment, decrement } = useContext(counterContext);
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={() => decrement()}>MINUS</button>
      <button onClick={increment}>PLUS</button>
    </div>
  );
};

export default Counter;
