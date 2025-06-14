import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import './index.css';
import Destination from './pages/Destination/Destination';

const App = () => {
    return (
        <Router>
            <Navbar /> {/* Navbar will be displayed on all pages */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Destination />} />
                {/* Add more routes as needed */}
            </Routes>
        </Router>
    );
};

export default App;
