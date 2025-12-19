import React from 'react';

interface DataPoint {
    name: string;
    value: number;
}

const Home: React.FC = () => {
    // Dados de exemplo para análise
    const analysisData: DataPoint[] = [
        { name: 'Janeiro', value: 2400 },
        { name: 'Fevereiro', value: 1398 },
        { name: 'Março', value: 9800 },
        { name: 'Abril', value: 3908 },
        { name: 'Maio', value: 4800 },
        { name: 'Junho', value: 3800 },
    ];

    const totalValue = analysisData.reduce((sum, item) => sum + item.value, 0);
    const avgValue = Math.round(totalValue / analysisData.length);

    return (
        <main className="home-page">
            <section className="hero">
                <h1>🔗 DataLinker - Análise de Dados em Tempo Real</h1>
                <p>Integre, analise e visualize seus dados com facilidade</p>
            </section>

            <section className="dashboard">
                <h2>Dashboard de Análise</h2>
                
                <div className="metrics">
                    <div className="metric-card">
                        <h3>Total de Dados</h3>
                        <p className="metric-value">{totalValue.toLocaleString()}</p>
                        <p className="metric-label">registros processados</p>
                    </div>
                    <div className="metric-card">
                        <h3>Média Mensal</h3>
                        <p className="metric-value">{avgValue.toLocaleString()}</p>
                        <p className="metric-label">por período</p>
                    </div>
                    <div className="metric-card">
                        <h3>Fontes Ativas</h3>
                        <p className="metric-value">12</p>
                        <p className="metric-label">conexões ativas</p>
                    </div>
                </div>

                <div className="data-table">
                    <h3>Dados por Período</h3>
                    <table>
                        <thead>
                            <tr>
                                <th>Período</th>
                                <th>Valor</th>
                                <th>Percentual do Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analysisData.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.value.toLocaleString()}</td>
                                    <td>{((item.value / totalValue) * 100).toFixed(1)}%</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>

            <section className="features">
                <h2>Funcionalidades Principais</h2>
                <div className="features-grid">
                    <div className="feature-item">
                        <h4>📊 Visualização de Dados</h4>
                        <p>Gráficos interativos e em tempo real para melhor compreensão dos dados</p>
                    </div>
                    <div className="feature-item">
                        <h4>🔄 Integração Automática</h4>
                        <p>Conecte múltiplas fontes de dados com configuração simples</p>
                    </div>
                    <div className="feature-item">
                        <h4>⚡ Processamento Rápido</h4>
                        <p>Análise instantânea de grandes volumes de dados</p>
                    </div>
                    <div className="feature-item">
                        <h4>🔒 Segurança Garantida</h4>
                        <p>Seus dados protegidos com as melhores práticas de segurança</p>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;