import { render, renderHook, waitFor } from "@testing-library/react";
import { Provider } from 'react-redux';
import { expect, test } from 'vitest';
import App from '../app/App';
import store from '../app/store/store';

// Testing component with user interaction
test('displays title', async () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const appTitle = await app.findByText('Vite + React');
  expect(appTitle.innerText).toContain('Vite + React');
  app.unmount();
});

test('increment counter on click', async () => {
  const app = render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
  const incrementButton = await app.findByTestId('increment');
  if (incrementButton) {
    incrementButton.click();
    expect(incrementButton.innerText).toContain('increment count is 1');
  }
  app.unmount();
});

// Testing Custom Hook

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       staleTime: Infinity,
//       cacheTime: Infinity,
//       retry: false,
//     },
//   },
// });

// test('gives an empty list with no animal', async () => {
//   const { result } = renderHook(() => useBreedList(''), {
//     wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
//   });

//   const [breedList, status] = result.current;

//   expect(breedList).toHaveLength(0);
//   expect(status).toBe('loading');
// });

// Testing with mocks (api mock)
// grab waitFor

// add at bottom
// test('gives back breeds with an animal', async () => {
//   const breeds = ['Havanese', 'Bichon Frise', 'Poodle', 'Maltese', 'Golden Retriever', 'Labrador', 'Husky'];
//   // eslint-disable-next-line @typescript-eslint/no-unsafe-call
//   fetch.mockResponseOnce(
//     JSON.stringify({
//       animal: 'dog',
//       breeds,
//     }),
//   );
//   const { result } = renderHook(() => useBreedList('dog'), {
//     wrapper: ({ children }) => <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>,
//   });

//   await waitFor(() => expect(result.current[1]).toBe('success'));

//   const [breedList] = result.current;
//   expect(breedList).toEqual(breeds);
// });
