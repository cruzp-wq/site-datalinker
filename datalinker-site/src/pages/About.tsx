import React, { useState } from 'react';

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
                    {[
                        {
                            title: 'Compromisso com a saúde pública',
                            desc: 'Apoiamos ações que priorizam o bem‑estar da população, trabalhando para garantir acesso, qualidade e continuidade dos serviços de atenção básica em todas as nossas implantações.'
                        },
                        {
                            title: 'Ética e transparência',
                            desc: 'Atuamos com integridade, mantendo comunicação clara com gestores e equipes, e documentando processos para auditoria e conformidade com normas públicas.'
                        },
                        {
                            title: 'Excelência técnica',
                            desc: 'Nossos profissionais são capacitados e seguem boas práticas de infraestrutura, segurança e operação dos sistemas e‑SUS para garantir estabilidade e disponibilidade.'
                        },
                        {
                            title: 'Inovação',
                            desc: 'Buscamos continuamente melhorias técnicas e de processo, adotando soluções que aumentem eficiência, automação e monitoramento das UBS.'
                        },
                        {
                            title: 'Parceria com os municípios',
                            desc: 'Trabalhamos lado a lado com secretarias e equipes locais, oferecendo treinamento, transferência de conhecimento e suporte dedicado para sustentabilidade do projeto.'
                        }
                    ].map((item, idx) => (
                        <ValueItem key={idx} index={idx} title={item.title} description={item.desc} />
                    ))}
                </ul>
            </section>
        </main>
    );
};

export default About;

// -------------------------
// Componente ValueItem (accordion simples)
// -------------------------
interface ValueItemProps {
    index: number;
    title: string;
    description: string;
}

const ValueItem: React.FC<ValueItemProps> = ({ index, title, description }) => {
    const [open, setOpen] = useState(false);
    return (
        <li className={`value-item ${open ? 'open' : ''}`}>
            <button
                className="value-btn"
                aria-expanded={open}
                aria-controls={`value-desc-${index}`}
                onClick={() => setOpen((s) => !s)}
            >
                <span className="value-title">{title}</span>
                <span className="value-toggle">{open ? '−' : '+'}</span>
            </button>

            <div
                id={`value-desc-${index}`}
                className="value-content"
                role="region"
                aria-hidden={!open}
            >
                <p>{description}</p>
            </div>
        </li>
    );
};