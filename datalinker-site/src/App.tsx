import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Team from './pages/Team';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';

const App = () => {
    return (
        <Router basename="/site-datalinker/">
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
            {/* Botão WhatsApp Flutuante */}
            <a
                href="https://wa.me/5584997522344"
                className="whatsapp-float"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Falar no WhatsApp"
            >
                💬
            </a>
        </Router>
    );
};

export default App;