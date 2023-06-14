import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment } from './store/slice';
import { RootState } from './store/store';
import { Button } from '@chakra-ui/react';

function App() {
  const count: number = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const incrementCounter = () => {
    dispatch(increment(1));
  };

  const decrementCounter = () => {
    dispatch(decrement(-1));
  };

  return (
    <div>
      <Button colorScheme="blue" data-testid="increment" onClick={() => incrementCounter()}>
        {' '}
        increment count is {count}
      </Button>
      <Button colorScheme="blue" data-testid="increment" onClick={() => decrementCounter()}>
        {' '}
        decrement count is {count}
      </Button>
    </div>
  );
}

export default App;
