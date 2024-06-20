import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { NextUIProvider } from '@nextui-org/react';
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </ChakraProvider>
  </React.StrictMode>
);
