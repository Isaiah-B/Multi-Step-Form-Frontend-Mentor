import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { InfoProvider } from './context/context';
import { GlobalStyle } from './index.styles';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <InfoProvider>
    <GlobalStyle />
    <App />
  </InfoProvider>
);
