import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CssBaseline,createTheme } from "@mui/material";
import App from './App';
import { ThemeProvider } from '@emotion/react';

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#6c1b71',
    },
    secondary: {
      main: '#24b2c9',
    },
    success: {
      main: '#4eda53',
    },
    background: {
      default: '#f5f5f5',
    },
    text: {
      secondary: 'rgba(234,226,226,0.67)',
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
    </ThemeProvider>
  </React.StrictMode>
);

