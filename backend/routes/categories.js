// routes/categories.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
  db.all('SELECT * FROM category', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.get('/:cat_id/subcategories', (req, res) => {
  const { cat_id } = req.params;
  db.all('SELECT * FROM sub_category WHERE cat_id = ?', [cat_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
