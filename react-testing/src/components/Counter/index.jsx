import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../../store/selectors/getCounterValue';
import { decrement, increment } from '../../store/slices/counterSlice';

const Counter = () => {
   const dispatch = useDispatch();
   const value = useSelector(getCounterValue);

   const onIncrement = () => {
      dispatch(increment());
   };

   const onDecrement = () => {
      dispatch(decrement());
   };

   return (
      <div>
         <h1 data-testid="counter-value">value = {value}</h1>
         <button data-testid="counter-increment-btn" onClick={onIncrement}>
            increment
         </button>
         <button data-testid="counter-decrement-btn" onClick={onDecrement}>
            decrement
         </button>
      </div>
   );
};

export default Counter;
