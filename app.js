const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Définir EJS comme moteur de template
app.set('view engine', 'ejs');

// Définir le dossier public pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

