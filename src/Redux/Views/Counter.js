import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../Action/Action_";

const Counter = () => {
  const ref = useSelector((y) => y.counter);
  const dis = useDispatch();

  const incre = () => {
    dis(increment());
  };

  return (
    <div>
      {ref}
      <button onClick={incre}>+</button>
    </div>
  );
};

export default Counter;
