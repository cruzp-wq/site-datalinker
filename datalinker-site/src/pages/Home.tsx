import React from 'react';

interface DataPoint {
    name: string;
    value: number;
}

const Home: React.FC = () => {
    // Métricas do serviço (exemplares). Ajuste conforme dados reais.
    const ubsAtendidas = 24;
    const estadosAtendidos = 4;
    const projetosAndamento = 1;

    return (
        <main className="home-page">
            <section className="hero">
                <h1>Datalinker — Especialistas em e-SUS para UBS</h1>
                <p>Implantação, suporte técnico e subida dos sistemas e-SUS para Unidades Básicas de Saúde.</p>
            </section>

            <section className="dashboard">
                <h2>Nosso Alcance</h2>

                <div className="metrics">
                    <div className="metric-card">
                        <h3>UBS Atendidas</h3>
                        <p className="metric-value">{ubsAtendidas}</p>
                        <p className="metric-label">unidades</p>
                    </div>
                    <div className="metric-card">
                        <h3>Estados Atendidos</h3>
                        <p className="metric-value">{estadosAtendidos}</p>
                        <p className="metric-label">estados</p>
                    </div>
                    <div className="metric-card">
                        <h3>Projetos em Andamento</h3>
                        <p className="metric-value">{projetosAndamento}</p>
                        <p className="metric-label">cidades/municípios</p>
                    </div>
                </div>

                <div className="data-table">
                    <h3>Nossos Serviços</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Serviço</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Implantação e-SUS AB</td>
                                <td>Implantação completa dos sistemas e-SUS para UBS, com configuração e testes.</td>
                            </tr>
                            <tr>
                                <td>Subida de Servidores</td>
                                <td>Subida e configuração de servidores e infraestrutura para operação estável.</td>
                            </tr>
                            <tr>
                                <td>Suporte Técnico</td>
                                <td>Suporte remoto e presencial, com manutenção e atualizações contínuas.</td>
                            </tr>
                            <tr>
                                <td>Treinamento</td>
                                <td>Treinamento básico para equipes locais e transferência de conhecimento.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="features">
                <h2>Como Atuamos</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h4>� Atuação com UBS e Secretarias</h4>
                        <p>Trabalhamos junto às equipes locais e gestores municipais para garantir aderência e continuidade.</p>
                    </div>
                    <div className="feature-item">
                        <h4>�️ Infraestrutura e Segurança</h4>
                        <p>Configuramos servidores com políticas de segurança e backup adequados às normas do MS.</p>
                    </div>
                    <div className="feature-item">
                        <h4>📈 Expansão e Projetos</h4>
                        <p>Projetos aprovados para expansão — foco em Parnamirim/RN e novas UBS.</p>
                    </div>
                    <div className="feature-item">
                        <h4>🎓 Treinamento e Suporte</h4>
                        <p>Capacitação das equipes locais para operação independente e suporte contínuo.</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;