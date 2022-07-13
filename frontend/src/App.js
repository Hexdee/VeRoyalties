import React from 'react';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './components/pages/Home';
import About from './components/pages/About';
import FAQ from './components/pages/FAQ';
import MarketPlace from './components/pages/MarketPlace';

import './App.css';
import SingleProperty from './components/pages/SingleProperty';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Routes>
            <Route path='/About' element={<About/>}></Route>
            <Route path='/FAQ' element={<FAQ/>}></Route>
            <Route path='/MarketPlace' element={<MarketPlace/>}></Route>
            <Route path='/property' element={<SingleProperty/>}></Route>
            <Route path='/' element={<Home/>}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
