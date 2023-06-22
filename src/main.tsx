import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './app/App';
import './index.css';
import store from './app/store/store';
import { firebaseConfig } from './app/config/firebase.config';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
