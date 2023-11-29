import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import { Provider } from 'react-redux';
import store from './store/store'; // Upewnij się, że ścieżka do store jest poprawna
import App from './components/App'; // Upewnij się, że ścieżka do App jest poprawna
import './index.css';

// Pobieramy element kontenera, gdzie chcemy umieścić aplikację React
const container = document.getElementById('root');

// Używamy createRoot aby zainicjować korzeń aplikacji
const root = createRoot(container);

// Renderujemy aplikację wewnątrz korzenia, używając nowego API
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
