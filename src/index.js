import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/store'; // Import du store Redux
import { Provider } from 'react-redux'; // Import du Provider pour Redux
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* Ajout du Provider pour injecter le store */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// Si vous souhaitez mesurer les performances
reportWebVitals();
