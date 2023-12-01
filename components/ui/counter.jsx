import React from "react";

const Counter = ({ increaseCounter, decreaseCounter, disabled, quantity }) => {
  return (
    <div className="flex items-center gap-4 border px-3 rounded-md">
      <button onClick={decreaseCounter} disabled={disabled}>
        -
      </button>
      <p>{quantity}</p>
      <button onClick={increaseCounter}>+</button>
    </div>
  );
};

export default Counter;
