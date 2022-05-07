import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './index.css';
import App from './App';
import About from './About';
import Testimonials2021 from './Testimonials2021';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/testimonials" element={<Testimonials2021 />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
