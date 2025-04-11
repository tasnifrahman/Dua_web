// routes/duas.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/categories/:cat_id/subcategories/:sub_id/duas', (req, res) => {
  const { cat_id, sub_id } = req.params;

  const query = `
    SELECT * FROM dua
    WHERE cat_id = ? AND subcat_id = ?
  `;

  db.all(query, [cat_id, sub_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
