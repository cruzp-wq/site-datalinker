import React from 'react';

const Team: React.FC = () => {
    return (
        <main>
            <div className="about-content">
                <h1>Equipe</h1>
                <p>Conheça a equipe por trás do DataLinker. Aqui você pode adicionar fotos, cargos e uma breve descrição de cada membro.</p>

                <div className="values-list">
                    <div className="value-item" style={{ padding: 16 }}>
                        <h3 style={{ margin: 0 }}>Gleidson Luis Chagas Medeiros</h3>
                        <p style={{ marginTop: 8, color: 'var(--text-light)' }}><strong>Responsabilidades:</strong> Administração e Tecnologia</p>
                    </div>

                    <div className="value-item" style={{ padding: 16 }}>
                        <h3 style={{ margin: 0 }}>Fabiano Silva dos Santos</h3>
                        <p style={{ marginTop: 8, color: 'var(--text-light)' }}><strong>Responsabilidades:</strong> Administração financeira, Tecnologia e Comercial</p>
                    </div>

                    <div className="value-item" style={{ padding: 16 }}>
                        <h3 style={{ margin: 0 }}>Guilherme Alves Mederos</h3>
                        <p style={{ marginTop: 8, color: 'var(--text-light)' }}><strong>Responsabilidades:</strong> Financeiro, Tecnologia, Produção e Comercial</p>
                    </div>

                    <div className="value-item" style={{ padding: 16, display: 'flex', alignItems: 'center', gap: '20px', background: '#e8eef7' }}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ margin: 0 }}>Pedro Henrique Lima da Cruz</h3>
                            <p style={{ marginTop: 8, color: 'var(--text-light)' }}><strong>Responsabilidades:</strong> Tecnologia, Produção e Marketing</p>
                        </div>
                        <img src="/team/pedro-henrique.jpg" alt="Pedro Henrique Lima da Cruz" style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', flexShrink: 0 }} />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Team;
