const express = require('express');
const burger = require('../models/burger');

const router = express.Router();
console.log("launch controller");

// get all
router.get('/', function (req, res) {
    console.log('')
    burger.selectAll(function (data) {
        console.log('')
        res.render('index', { burgerObj: data });
    });
});

// insert
router.post('/api/newBurger', function (req, res) {
    console.log('req.body');
    burger.insertOne(['burger_name'], [req.body.burger_name], function (result) {
        res.json({ id: result.insertId });
    });
});

// update
router.put('/api/devorIt/:id', function (req, res) {
    console.log('')
    burger.updateOne(req.params.id, function (results) {
        if (results.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;