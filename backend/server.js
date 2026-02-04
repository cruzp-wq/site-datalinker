const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Banco de dados SQLite
const dbPath = path.join(__dirname, 'contatos.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err.message);
    } else {
        console.log('Conectado ao banco de dados SQLite');
        initDB();
    }
});

// Inicializar banco de dados
function initDB() {
    db.run(`
        CREATE TABLE IF NOT EXISTS contatos (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) {
            console.error('Erro ao criar tabela:', err.message);
        } else {
            console.log('Tabela de contatos pronta');
        }
    });
}

// Rota para receber contatos
app.post('/api/contatos', (req, res) => {
    const { name, email, subject, message } = req.body;

    // Validação
    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const query = `
        INSERT INTO contatos (name, email, subject, message)
        VALUES (?, ?, ?, ?)
    `;

    db.run(query, [name, email, subject, message], function(err) {
        if (err) {
            console.error('Erro ao salvar contato:', err.message);
            return res.status(500).json({ error: 'Erro ao salvar contato' });
        }
        
        res.status(201).json({ 
            message: 'Contato salvo com sucesso',
            id: this.lastID
        });
    });
});

// Rota para obter todos os contatos (protegida)
app.get('/api/contatos', (req, res) => {
    // Em produção, adicione autenticação aqui
    const query = `SELECT * FROM contatos ORDER BY created_at DESC`;

    db.all(query, (err, rows) => {
        if (err) {
            console.error('Erro ao buscar contatos:', err.message);
            return res.status(500).json({ error: 'Erro ao buscar contatos' });
        }
        
        res.json(rows);
    });
});

// Rota para obter um contato específico
app.get('/api/contatos/:id', (req, res) => {
    const { id } = req.params;
    const query = `SELECT * FROM contatos WHERE id = ?`;

    db.get(query, [id], (err, row) => {
        if (err) {
            console.error('Erro ao buscar contato:', err.message);
            return res.status(500).json({ error: 'Erro ao buscar contato' });
        }
        
        if (!row) {
            return res.status(404).json({ error: 'Contato não encontrado' });
        }
        
        res.json(row);
    });
});

// Rota para deletar um contato
app.delete('/api/contatos/:id', (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM contatos WHERE id = ?`;

    db.run(query, [id], function(err) {
        if (err) {
            console.error('Erro ao deletar contato:', err.message);
            return res.status(500).json({ error: 'Erro ao deletar contato' });
        }
        
        if (this.changes === 0) {
            return res.status(404).json({ error: 'Contato não encontrado' });
        }
        
        res.json({ message: 'Contato deletado com sucesso' });
    });
});

// Health check
app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

// Fechar banco de dados ao encerrar
process.on('SIGINT', () => {
    db.close((err) => {
        if (err) {
            console.error('Erro ao fechar banco de dados:', err.message);
        } else {
            console.log('Banco de dados fechado');
        }
        process.exit(0);
    });
});
