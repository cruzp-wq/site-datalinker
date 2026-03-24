import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>DataLinker</h3>
                    <p>Especialistas em implantação e suporte do sistema e-SUS PEC para Unidades Básicas de Saúde em todo o Brasil.</p>
                    <div className="footer-social">
                        <a href="https://wa.me/5584997522344" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">📱 WhatsApp</a>
                        <a href="mailto:contato@datalinker.com.br" aria-label="Email">✉️ Email</a>
                    </div>
                </div>

                <div className="footer-section">
                    <h3>Serviços</h3>
                    <ul>
                        <li><Link to="/about">Implantação e-SUS</Link></li>
                        <li><Link to="/about">Suporte Técnico</Link></li>
                        <li><Link to="/about">Infraestrutura</Link></li>
                        <li><Link to="/about">Treinamento</Link></li>
                        <li><Link to="/about">Monitoramento</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Empresa</h3>
                    <ul>
                        <li><Link to="/about">Sobre Nós</Link></li>
                        <li><Link to="/team">Equipe</Link></li>
                        <li><Link to="/contact">Contato</Link></li>
                        <li><a href="#privacy">Política de Privacidade</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Atuação</h3>
                    <ul>
                        <li>Rio Grande do Norte</li>
                        <li>Paraíba</li>
                        <li>Pernambuco</li>
                        <li>São Paulo</li>
                        <li>Rio de Janeiro</li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} DataLinker. Todos os direitos reservados. | CNPJ: XX.XXX.XXX/0001-XX</p>
            </div>
        </footer>
    );
};

export default Footer;