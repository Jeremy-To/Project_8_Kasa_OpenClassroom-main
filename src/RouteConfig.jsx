import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Banner from './components/Banner.jsx';
import Home from './pages/home.jsx';
import About from './pages/about.jsx';
import ErrorPage from './components/Error.jsx';
import Logement from './pages/Logement.jsx';
import Footer from './components/Footer.jsx';
import data from './data/data.json';

function RouteConfig() {
   return (
      <div className="route">
         <Router>
            <Banner />
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/About" element={<About />} />
               <Route path="/housing/:id" element={<Logement data={data} />} />
               <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
         </Router>
      </div>
   );
}
export default RouteConfig;
