import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { ThemeProvider, createTheme, Button } from "ingred-ui";
import App from './App'

const theme = createTheme();
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
