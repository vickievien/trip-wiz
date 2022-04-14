import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import MainContainerComponent from './main/mainContainerComponent';
import HomeContainerComponent from './home/homeContainerComponent';

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
      
      {/* <App /> */}
          {/* <Route path="/" element={<App />}/> */}
          <Route path="/" element={<HomeContainerComponent />}/>
          <Route path="/reviews" element={< MainContainerComponent />}/>
      
      
      
      
      
      </Routes>
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
