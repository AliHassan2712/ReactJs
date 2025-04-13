import React from "react";

const Coun = ({ id, count, steps, onIncrement, onDecrement }) => {
  return (
    <>
      <div>
        <button onClick={() => onDecrement(id, steps)}>-</button>
        <span>{count}</span>
        <button onClick={() => onIncrement(id, steps)}>+</button>
      </div>
    </>
  );
};

export default Coun;
