const express = require('express');
const productsRouter = express.Router();
const checkValidation = require('../Middlewares/checkValidation');

productsRouter
.route('/')
.get(checkValidation, (req, res) => {
    res.json([
        { id: 1, name: 'Macbook'},
        { id: 2, name: 'Airpods'}       
    ])
})
.post((req, res) => {
    res.status(201).json({ success: 'New product created!'});
})


module.exports = productsRouter;