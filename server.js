const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'Lucas', lastName: 'Dee'},
    {id: 2, firstName: 'Fred', lastName: 'Burrows'},
    {id: 3, firstName: 'Barbara', lastName: 'Swanson'},
  ];

  res.json(customers);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);