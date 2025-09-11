import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/index.jsx';
import './index.css'; // Tailwind styles

const root = createRoot(document.getElementById('root'));
root.render(<Home />);
