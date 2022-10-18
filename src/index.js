import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Equipos from '../src/Pages/Machines/Machines'
import PageNotFound from './Components/PageNotFound/PageNotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
            <Routes>
                <Route path='/*' element={<PageNotFound/>} />
                <Route path='/' element={<App/>} />
                <Route path='/equipos' element={<Equipos />}></Route>
            </Routes>
        </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
