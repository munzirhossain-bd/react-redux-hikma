import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement,incrementByAmount } from '../redux/features/counter/counterSlice';
import { useState } from 'react';

const Counter = () => {
  const count1=useSelector((state) => 
  state.counter.find(item => item.id === 1)?.value // Change 1 to dynamic ID if needed
);
  const count2=useSelector((state) => 
  state.counter.find(item => item.id === 2)?.value // Change 1 to dynamic ID if needed
);
const counter3=useSelector((state)=>console.log(state.counter.find((item)=>item.id===2).id)) 
  const [incrementAmount, setIncrementAmount] = useState('0');
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{count1}</h1>
      <h1>{count2}</h1>
      <button onClick={() => dispatch(increment(1))}>+</button>
      <button onClick={() => dispatch(decrement(2))}>-</button>
       <input
          className=""
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
          className=""
          onClick={() =>
            dispatch(incrementByAmount({ id: 1, amount: Number(incrementAmount|| 0) }))
          }
        >Add</button>
    </div>
  );
};

export default Counter;
