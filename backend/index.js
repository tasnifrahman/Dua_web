// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// Routes
const categoriesRoutes = require('./routes/categories');
const subcategoriesRoutes = require('./routes/subcategories');
const duasRoutes = require('./routes/duas');

app.use('/categories', categoriesRoutes);
app.use('/', subcategoriesRoutes);
app.use('/', duasRoutes); 

app.listen(PORT, () => {
  console.log(`API server running on http://localhost:${PORT}`);
});
