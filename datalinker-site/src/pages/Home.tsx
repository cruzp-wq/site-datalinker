import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    return (
        <main className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content">
                    <h1 className="fade-in">DataLinker — Tecnologia para Saúde Pública</h1>
                    <p className="fade-in">
                        Especialistas em implantação e suporte do sistema e-SUS PEC para Unidades Básicas de Saúde.
                        Levamos estabilidade, segurança e eficiência para o SUS em todo o Brasil.
                    </p>
                    <div className="hero-buttons fade-in">
                        <Link to="/contact" className="btn-primary">Solicitar Orçamento</Link>
                        <Link to="/about" className="btn-secondary">Conheça Nossos Serviços</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/health-tech.svg" alt="Tecnologia em Saúde" />
                </div>
            </section>

            {/* Métricas de Confiança */}
            <section className="trust-metrics">
                <div className="container">
                    <div className="metrics-grid">
                        <div className="metric-card slide-up">
                            <div className="metric-number">24+</div>
                            <div className="metric-label">UBS Atendidas</div>
                        </div>
                        <div className="metric-card slide-up">
                            <div className="metric-number">4</div>
                            <div className="metric-label">Estados Atendidos</div>
                        </div>
                        <div className="metric-card slide-up">
                            <div className="metric-number">100%</div>
                            <div className="metric-label">Uptime Garantido</div>
                        </div>
                        <div className="metric-card slide-up">
                            <div className="metric-number">5+</div>
                            <div className="metric-label">Anos de Experiência</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sobre a Empresa */}
            <section className="about-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Sobre a DataLinker</h2>
                        <p>Compromisso com a excelência em saúde pública</p>
                    </div>
                    <div className="about-content">
                        <div className="about-text">
                            <p>
                                A <strong>DataLinker</strong> é uma empresa especializada em soluções tecnológicas
                                para o Sistema Único de Saúde (SUS), com foco exclusivo na implantação e suporte
                                dos sistemas e-SUS PEC para Unidades Básicas de Saúde (UBS).
                            </p>
                            <p>
                                Com sede no Rio Grande do Norte e atuação em múltiplos estados,
                                trabalhamos lado a lado com gestores municipais e equipes técnicas
                                para garantir que cada UBS tenha acesso a sistemas estáveis,
                                seguros e em conformidade com as normas do Ministério da Saúde.
                            </p>
                            <Link to="/about" className="btn-secondary">Saiba Mais Sobre Nós</Link>
                        </div>
                        <div className="about-image">
                            <img src="/team-work.svg" alt="Equipe DataLinker" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Serviços */}
            <section className="services-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Nossos Serviços</h2>
                        <p>Soluções completas para implementação e manutenção de sistemas e-SUS</p>
                    </div>
                    <div className="services-grid">
                        <div className="service-card">
                            <div className="service-icon">🏥</div>
                            <h3>Implantação e-SUS AB</h3>
                            <p>Instalação completa e configuração dos sistemas e-SUS PEC,
                            com testes rigorosos e validação de conformidade.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🖥️</div>
                            <h3>Infraestrutura e Servidores</h3>
                            <p>Subida e configuração de servidores dedicados,
                            com políticas de segurança e backup adequadas.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔧</div>
                            <h3>Suporte Técnico</h3>
                            <p>Suporte remoto e presencial 24/7, com manutenção preventiva
                            e corretiva para máxima disponibilidade.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📚</div>
                            <h3>Treinamento e Capacitação</h3>
                            <p>Capacitação completa das equipes locais para operação
                            independente e transferência de conhecimento.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">📊</div>
                            <h3>Monitoramento e Analytics</h3>
                            <p>Soluções de monitoramento em tempo real e relatórios
                            de performance para otimização contínua.</p>
                        </div>
                        <div className="service-card">
                            <div className="service-icon">🔒</div>
                            <h3>Segurança da Informação</h3>
                            <p>Implementação de protocolos de segurança conforme
                            LGPD e normas do Ministério da Saúde.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Onde Atuamos */}
            <section className="locations-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Onde Atuamos</h2>
                        <p>Presença consolidada em diversos estados brasileiros</p>
                    </div>
                    <div className="locations-content">
                        <div className="states-grid">
                            <div className="state-card active">
                                <h3>Paraíba (PB)</h3>
                                <p>Múltiplas UBS atendidas com sucesso</p>
                            </div>
                            <div className="state-card active">
                                <h3>Pernambuco (PE)</h3>
                                <p>Projetos de expansão em andamento</p>
                            </div>
                            <div className="state-card active">
                                <h3>São Paulo (SP)</h3>
                                <p>Parcerias estratégicas estabelecidas</p>
                            </div>
                            <div className="state-card active">
                                <h3>Rio de Janeiro (RJ)</h3>
                                <p>Experiência comprovada em grandes municípios</p>
                            </div>
                            <div className="state-card expansion">
                                <h3>Rio Grande do Norte (RN)</h3>
                                <p><strong>Expansão em Parnamirim</strong></p>
                                <small>Projeto aprovado para novas UBS</small>
                            </div>
                        </div>
                        <div className="expansion-highlight">
                            <h3>🚀 Expansão Estratégica</h3>
                            <p>
                                Estamos expandindo nossas operações para Parnamirim/RN,
                                com foco na implantação dos sistemas e-SUS para as novas
                                Unidades Básicas de Saúde que serão criadas no município.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Diferenciais */}
            <section className="differentials-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Por Que Escolher a DataLinker?</h2>
                        <p>Diferenciais que fazem a diferença na saúde pública</p>
                    </div>
                    <div className="differentials-grid">
                        <div className="differential-item">
                            <div className="differential-icon">🎯</div>
                            <h3>Especialização Exclusiva</h3>
                            <p>Foco 100% em sistemas e-SUS, garantindo expertise técnica incomparável.</p>
                        </div>
                        <div className="differential-item">
                            <div className="differential-icon">⚡</div>
                            <h3>Rapidez na Implantação</h3>
                            <p>Processos otimizados que reduzem tempo de implementação sem comprometer qualidade.</p>
                        </div>
                        <div className="differential-item">
                            <div className="differential-icon">🤝</div>
                            <h3>Parceria com Municípios</h3>
                            <p>Trabalhamos lado a lado com secretarias e equipes locais para sustentabilidade.</p>
                        </div>
                        <div className="differential-item">
                            <div className="differential-icon">🔄</div>
                            <h3>Suporte Contínuo</h3>
                            <p>Acompanhamento pós-implantação com SLA garantido e atendimento prioritário.</p>
                        </div>
                        <div className="differential-item">
                            <div className="differential-icon">📈</div>
                            <h3>Resultados Comprovados</h3>
                            <p>24+ UBS atendidas com 100% de satisfação e uptime garantido.</p>
                        </div>
                        <div className="differential-item">
                            <div className="differential-icon">🛡️</div>
                            <h3>Conformidade Total</h3>
                            <p>100% aderente às normas do MS, LGPD e melhores práticas de segurança.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projetos em Destaque */}
            <section className="projects-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Projetos em Destaque</h2>
                        <p>Cases de sucesso que transformaram a realidade das UBS</p>
                    </div>
                    <div className="projects-grid">
                        <div className="project-card">
                            <h3>Expansão Parnamirim/RN</h3>
                            <p>Projeto aprovado para implantação completa dos sistemas e-SUS
                            em novas UBS que serão criadas no município.</p>
                            <div className="project-status">Em Planejamento</div>
                        </div>
                        <div className="project-card">
                            <h3>Modernização SP</h3>
                            <p>Atualização de infraestrutura legada para cloud computing,
                            resultando em 40% de melhoria na performance.</p>
                            <div className="project-status">Concluído</div>
                        </div>
                        <div className="project-card">
                            <h3>Escalabilidade PE</h3>
                            <p>Implantação de sistema capaz de suportar crescimento de 300%
                            na demanda sem degradação de performance.</p>
                            <div className="project-status">Em Andamento</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="cta-section">
                <div className="container">
                    <div className="cta-content">
                        <h2>Pronto para Modernizar Sua UBS?</h2>
                        <p>
                            Entre em contato conosco e descubra como podemos ajudar sua
                            Unidade Básica de Saúde a ter acesso aos melhores sistemas e-SUS.
                        </p>
                        <div className="cta-buttons">
                            <Link to="/contact" className="btn-primary">Falar com Especialista</Link>
                            <a href="https://wa.me/5584997522344" className="btn-whatsapp" target="_blank" rel="noopener noreferrer">
                                WhatsApp: (84) 99752-2344
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;