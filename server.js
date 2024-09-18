const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware, um JSON-Daten zu parsen und CORS zu erlauben
app.use(cors());
app.use(express.json());

let users = [];  // Hier speichern wir die Registrierungen

// POST-Route für die Registrierung
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: 'Bitte alle Felder ausfüllen' });
  }

  // Neue Registrierung speichern
  users.push({ username, email, password });
  console.log('Neue Registrierung:', { username, email });

  return res.status(201).json({ message: 'Registrierung erfolgreich' });
});

// Server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
