import React from 'react';

const About: React.FC = () => {
    return (
        <main className="about-page">
            <h1>📖 Sobre DataLinker</h1>
            
            <section className="about-content">
                <h2>Quem Somos</h2>
                <p>
                    A DataLinker é uma plataforma inovadora de análise e integração de dados, 
                    desenvolvida para empresas que desejam transformar seus dados em insights valiosos.
                </p>

                <h2>Nossa Missão</h2>
                <p>
                    Facilititar o acesso e a análise de dados através de ferramentas intuitivas 
                    e poderosas, permitindo que empresas tomem decisões mais inteligentes baseadas em dados.
                </p>

                <h2>Valores</h2>
                <ul className="values-list">
                    <li><strong>Inovação:</strong> Estamos sempre buscando novas tecnologias</li>
                    <li><strong>Qualidade:</strong> Garantimos a máxima qualidade em nossas soluções</li>
                    <li><strong>Segurança:</strong> Protegemos os dados de nossos clientes</li>
                    <li><strong>Transparência:</strong> Comunicação clara com nossos usuários</li>
                </ul>

                <h2>Nossa Equipe</h2>
                <p>
                    Somos uma equipe dedicada de especialistas em análise de dados, engenheiros 
                    de software e designers UX/UI, trabalhando juntos para criar a melhor experiência possível.
                </p>
            </section>
        </main>
    );
};

export default About;