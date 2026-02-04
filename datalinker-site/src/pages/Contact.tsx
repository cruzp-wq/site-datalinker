import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            // Tentar enviar para o backend local
            const response = await fetch('http://localhost:5000/api/contatos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Erro ao enviar contato');
            }

            console.log('Contato enviado com sucesso:', formData);
            setSubmitted(true);
            
            // Limpar formulário após 3 segundos
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setSubmitted(false);
            }, 3000);
        } catch (err) {
            console.error('Erro:', err);
            setError('Erro ao enviar mensagem. Por favor, tente novamente.');
            
            // Falback: salvar no console e mostrar mensagem mesmo assim
            console.log('Contato (fallback):', formData);
            setSubmitted(true);
            
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setSubmitted(false);
                setError('');
            }, 3000);
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="contact-page">
            <h1>📧 Contato</h1>
            
            <section className="contact-content">
                <div className="contact-info">
                    <h2>Entre em Contato Conosco</h2>
                    <p>Temos interesse em ouvir você! Envie-nos uma mensagem e entraremos em contato em breve.</p>
                    
                    <div className="info-items">
                        <div className="info-item">
                            <h4>📍 Endereço</h4>
                            <p>Avenida Prudente de Morais, 637, Tirol — Natal, Rio Grande do Norte</p>
                        </div>
                        <div className="info-item">
                            <h4>📞 Contato Principal</h4>
                            <p>+55 (84) 99752-2344</p>
                        </div>
                        <div className="info-item">
                            <h4>📞 Contato Secundário</h4>
                            <p>+55 (84) 3473-6765</p>
                        </div>
                        <div className="info-item">
                            <h4>✉️ Email</h4>
                            <p>contato@datalinker.com.br</p>
                        </div>
                    </div>
                </div>

                <form className="contact-form" onSubmit={handleSubmit}>
                    {submitted && (
                        <div className="success-message">
                            ✅ Mensagem enviada com sucesso! Obrigado por entrar em contato.
                        </div>
                    )}
                    
                    {error && (
                        <div className="error-message" style={{ color: '#dc2626', padding: '12px', background: '#fee2e2', borderRadius: '4px', marginBottom: '16px' }}>
                            ❌ {error}
                        </div>
                    )}
                    
                    <div className="form-group">
                        <label htmlFor="name">Nome:</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email}
                            onChange={handleChange}
                            required 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Assunto:</label>
                        <input 
                            type="text" 
                            id="subject" 
                            name="subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            required 
                        />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Mensagem:</label>
                        <textarea 
                            id="message" 
                            name="message" 
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    
                    <button type="submit" className="submit-btn" disabled={loading}>
                        {loading ? 'Enviando...' : 'Enviar Mensagem'}
                    </button>
                </form>
            </section>
        </main>
    );
};

export default Contact;