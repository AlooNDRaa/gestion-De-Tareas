import express from 'express';
import { readFile } from 'fs';
import mysql from 'mysql2'; // Importa el paquete mysql2

const app = express();

const PORT = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: 'localhost', 
  user: 'root', 
  password: 'nebulosadelvelo2023',
  database: 'gestortareas2', 
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    throw err;
  }
  console.log('Conectado a la base de datos MySQL');
});

app.get("/", (_req, res) => {
  res.send("Hello home Server, I'm so happy");
});

app.get("/boards", (_req, res) => {
  db.query('SELECT * FROM boards', (err, results) => {
    if (err) {
      console.error('Error al obtener tableros:', err);
      res.status(500).json({ error: "Error al obtener los tableros" });
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
