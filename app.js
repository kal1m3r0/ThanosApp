const express = require('express');
const app = express();
const router = express.Router();

app.use(router);


// Middleware per restituire sempre errore 403
router.get('/', (req, res, next) =>
 {
    return res.status(403).send('Forbidden');

}   ) ;

// Middleware per gestire gli indirizzi che non esistono (errore 404)
app.use('*', (req, res, next) =>
{
    return res.status(404).send('Non trovato');


}   ) ;



// Avvia il server
const port = 3000;
app.listen(port, () => {
    console.log(`Server avviato su http://localhost:${port}`);
});