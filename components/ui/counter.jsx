import React from "react";

const Counter = ({ increaseCounter, decreaseCounter, disabled, quantity }) => {
  return (
    <div className="flex items-center gap-3 border p-1 rounded-md bg-gray-100">
      <button
        className={`${disabled ? "bg-red-200 cursor-not-allowed" : "bg-white"} px-3 rounded-sm`}
        onClick={decreaseCounter}
        disabled={disabled}
      >
        -
      </button>
      <p>{quantity}</p>
      <button className="bg-white px-3 rounded-md" onClick={increaseCounter}>
        +
      </button>
    </div>
  );
};

export default Counter;
