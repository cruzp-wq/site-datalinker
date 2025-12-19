import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header-content">
                <h1>📊 DataLinker</h1>
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