import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Increment, Decrement, Reset,addText } from "../JS/actions/actionsCounter";
const Counter = () => {
  const dispatch = useDispatch();
  const count=useSelector(state=>state.counter)
const [input, setInput] = useState( "");
const handleSubmit=(e)=>{
e.preventDefault();
dispatch(addText(input))
}
  return (
    <div>
      <button onClick={() => dispatch(Increment())}>+</button>
      <p>{count}</p>
      <button onClick={() => dispatch(Decrement())}>-</button>
      <button onClick={() => dispatch(Reset())}>reset</button>
      <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e)=>setInput(e.target.value)}/>
      </form>
    </div>
  );
};

export default Counter;
