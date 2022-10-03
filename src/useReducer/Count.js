import React from 'react';
import { COUNT_ACTIONS } from './index.js';

export const Count = ({ state, dispatch }) => {
  const decrement = () => {
    dispatch({ type: COUNT_ACTIONS.DECREMENT });
  };

  const increment = () => {
    dispatch({ type: COUNT_ACTIONS.INCREMENT });
  };

  return (
    <div style={{ margin: '2rem' }}>
      <p style={{ margin: '0.2em', fontSize: "2rem" }}>Count:</p>
      <button onClick={decrement}>-</button>
      <span style={{ margin: '0.5em' }}>{state.count}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
