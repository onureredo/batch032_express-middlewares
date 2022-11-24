const express = require('express');
const ordersRouter = express.Router();


ordersRouter.get('/', (req, res) => {
    res.json([
        { id: 1, client: 'Enrique'},
        { id: 2, client: 'Maxim'},
        { id: 3, client: 'Roxana'}
    ])
});

module.exports = ordersRouter;