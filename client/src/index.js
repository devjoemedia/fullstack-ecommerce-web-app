import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStateProvider } from './components/contextAPI/StateProvider';
import reducer, { initialState } from './components/contextAPI/reducer';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider initailState={initialState} reducer={reducer} >
      <App />
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
