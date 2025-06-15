import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Destination from './pages/Destination/Destination';
import Crew from './pages/Crew/Crew';

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Navbar will be displayed on all pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
