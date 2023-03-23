import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  selectCount,
  incrementByAmount,
} from "@/redux/features/counter/counterSlice";

function counter() {
  let count = useSelector(selectCount);
  let dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <div className="text-4xl flex gap-[20px] items-center">
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={() => dispatch(increment())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button
        onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
        className="border border-black p-4"
      >
        Inc by value
      </button>
    </div>
  );
}

export default counter;
