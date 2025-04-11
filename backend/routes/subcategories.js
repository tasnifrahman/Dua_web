// routes/subcategories.js
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/:cat_id/with-duas', (req, res) => {
  const { cat_id } = req.params;

  const query = `
    SELECT 
      sub.subcat_id,
      sub.subcat_name_en,
      sub.subcat_name_bn,
      dua.*
    FROM sub_category sub
    LEFT JOIN dua ON sub.subcat_id = dua.subcat_id
    WHERE sub.cat_id = ?
  `;

  db.all(query, [cat_id], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });

    const grouped = rows.reduce((acc, row) => {
      const subcatId = row.subcat_id;
      if (!acc[subcatId]) {
        acc[subcatId] = {
          subcat_id: row.subcat_id,
          subcat_name_bn: row.subcat_name_bn,
          subcat_name_en: row.subcat_name_en,
          duas: [],
        };
      }
      if (row.dua_id !== null) {
        acc[subcatId].duas.push({
          id: row.id,
          dua_id: row.dua_id,
          dua_name_bn: row.dua_name_bn,
          dua_name_en: row.dua_name_en,
          dua_arabic: row.dua_arabic,
          translation_bn: row.translation_bn,
          translation_en: row.translation_en,
          transliteration_bn: row.transliteration_bn,
          transliteration_en: row.transliteration_en,
          audio: row.audio,
        });
      }
      return acc;
    }, {});

    res.json(Object.values(grouped));
  });
});

module.exports = router;
