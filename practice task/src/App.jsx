import './App.css';
import { increment,decrement,reset,decrementByFive,incrementByTen,multiplyByTwo,divideByTwo } from './redux/counter/counterSlice';

import { useSelector,useDispatch } from 'react-redux';

function App() {
  const count = useSelector((state) => state.counter.count);

  const dispatch = useDispatch();

  return (
    <div className='app'>
      <div className='counter-card'>
        <h1>Redux Toolkit Counter</h1>

        <p className='subtitle'>Modern Redux Practice</p>

        <h2 className='count'>{count}</h2>

        <div className='button-group'>
          <button className='increment-btn' onClick={() => dispatch(increment())}>Increment +1</button>

          <button className='decrement-btn' onClick={() => dispatch(decrement())}>Decrement -1</button>

          <button className='reset-btn' onClick={() => dispatch(reset())}>Reset</button>

          <button className='amount-btn' onClick={() => dispatch(decrementByFive())}>Decrement -5</button>

          <button className='increment-btn' onClick={() => dispatch(incrementByTen())}>Increment +10</button>

          <button className='amount-btn' onClick={() => dispatch(multiplyByTwo())}>Multiply *2</button>

          <button className='decrement-btn' onClick={() => dispatch(divideByTwo())}>Divide / 2</button>
        </div>
      </div>
    </div>
  )
}

export default App
