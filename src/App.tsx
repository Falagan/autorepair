import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { increment, decrement } from './store/slice';
import { RootState } from './store/store';

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
    <div className="App">
      <div>
        <a href="https://vitejs.dev">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button data-testid="increment" onClick={() => incrementCounter()}>increment count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <button onClick={() => decrementCounter()}>decrement count is {count}</button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
}

export default App;
