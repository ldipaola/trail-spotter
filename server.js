const express = require('express');
const mongoose = require("mongoose");

const app = express();


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trailsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => `Server running on port ${PORT}`);