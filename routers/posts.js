const express = require('express');
const router = express.Router();

// index
router.get('/', (req, res) => {
    res.send('Lista dei post');
})

// show
router.get('/:id', (req, res) => {
    res.send('Dettaglio del post: ' +req.params.id);
})

// store
router.post('/', (req, res) => {
    res.send('Inserimento di un post');
})

// update
router.put('/:id', (req, res) => {
    res.send('Modifica totale del post: ' +req.params.id);
})

// destroy
router.delete('/:id', (req, res) => {
    res.send("eliminazione dell'elemento: " + req.params.id);
})

module.exports = router;