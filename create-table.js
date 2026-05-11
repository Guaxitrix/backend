import { sql } from "./db.js"; // Importa a conexão com o banco de dados MySQL


const createTableQuery = `
CREATE TABLE IF NOT EXISTS videos (
    id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    duration INT
);
`;// Define a consulta SQL para criar a tabela "videos" se ela não existir

// O mysql2 usa o método .query() que retorna uma Promise
sql.query(createTableQuery)
    .then(() => {
        console.log("Tabela 'videos' criada ou já existente com sucesso no MySQL");
    })
    .catch((err) => {
        console.error("Erro ao criar a tabela no MySQL:");
        console.error(err.message);
    });
