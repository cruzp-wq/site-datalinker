import React from 'react';

const About: React.FC = () => {
    return (
        <main className="about-page">
            <h1>Datalinker</h1>

            <section className="about-content">
                <h2>Quem Somos</h2>
                <p>
                    A <strong>Datalinker</strong> é uma empresa especializada em
                    <strong> implantação, suporte técnico e subida dos sistemas e-SUS</strong>
                    para Unidades Básicas de Saúde (UBS) em todo o Brasil.
                </p>
                <p>
                    Com sede no <strong>Rio Grande do Norte</strong>, atuamos junto a gestores
                    municipais e equipes técnicas para garantir estabilidade, segurança e
                    conformidade com as normas do Ministério da Saúde.
                </p>

                <h2>Nossos Serviços</h2>
                <ul>
                    <li>Implantação completa dos sistemas e-SUS AB</li>
                    <li>Subida e configuração de servidores e-SUS</li>
                    <li>Suporte técnico remoto e presencial</li>
                    <li>Atualização e manutenção dos sistemas</li>
                    <li>Integração com infraestrutura de rede e servidores</li>
                    <li>Apoio técnico para secretarias municipais de saúde</li>
                    <li>Treinamento básico para equipes locais</li>
                </ul>

                <h2>Onde Atuamos</h2>
                <h3>Estados Atendidos</h3>
                <div className="states">
                    <div>Paraíba (PB)</div>
                    <div>Pernambuco (PE)</div>
                    <div>São Paulo (SP)</div>
                    <div>Rio de Janeiro (RJ)</div>
                </div>

                <h3 style={{ marginTop: 20 }}>Rio Grande do Norte</h3>
                <ul>
                    <li>Natal — Atendimento às UBS da capital</li>
                </ul>

                <h2>Expansão e Novos Projetos</h2>
                <div className="highlight">
                    <p>
                        A Datalinker possui <strong>projeto aprovado para expansão na cidade de
                        Parnamirim/RN</strong>, com foco na implantação dos sistemas e-SUS e
                        suporte técnico para as <strong>novas UBS que serão criadas no município</strong>.
                    </p>
                </div>

                <h2>Nosso Diferencial</h2>
                <ul>
                    <li>Especialização exclusiva em sistemas e-SUS</li>
                    <li>Experiência comprovada em múltiplos estados</li>
                    <li>Atuação direta com UBS e secretarias de saúde</li>
                    <li>Equipe técnica qualificada</li>
                    <li>Rapidez na implantação</li>
                    <li>Suporte contínuo e personalizado</li>
                </ul>

                <h2>Missão, Visão e Valores</h2>

                <p><strong>Missão:</strong> Levar tecnologia, estabilidade e suporte técnico de excelência para a atenção básica, fortalecendo o SUS.</p>

                <p><strong>Visão:</strong> Ser referência nacional em implantação e suporte dos sistemas e-SUS para Unidades Básicas de Saúde.</p>

                <p><strong>Valores:</strong></p>
                <ul className="values-list">
                    <li>Compromisso com a saúde pública</li>
                    <li>Ética e transparência</li>
                    <li>Excelência técnica</li>
                    <li>Inovação</li>
                    <li>Parceria com os municípios</li>
                </ul>
            </section>
        </main>
    );
};

export default About;