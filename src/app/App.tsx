import './App.css';
import { decrement, increment } from './store/slice';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './theme/theme.config';
import { Router } from './Router';
import { queryClient } from './config/react-query.config';
import React from 'react';
import { RootState } from './store/store';
import { useDispatch, useSelector } from 'react-redux';

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
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
