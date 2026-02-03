import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <img src="/site-datalinker/logo.svg" alt="DataLinker" className="site-logo" />
                    <span style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary-color)' }}>DataLinker</span>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">Sobre</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;