// src/App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Services from './routes/Services';
import Contact from './routes/Contact';
import { Box, Divider } from '@mui/material';
import Header from './components/Header';
import About from './routes/About';

function App() {
  return (
    <Router>
      <Box className="app-container">
        <Header />
        <Divider flexItem orientation='horizontal' />
        <Box className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
