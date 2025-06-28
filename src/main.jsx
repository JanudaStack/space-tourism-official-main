import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS library
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

AOS.init(); // Initialize AOS

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App />
    </StrictMode>
);
