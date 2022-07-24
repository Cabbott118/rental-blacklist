import React from 'react';
import './App.css';

// MUI
import theme from './utility/theme';
import { ThemeProvider } from '@mui/material/styles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className='App'></div>
    </ThemeProvider>
  );
}

export default App;
