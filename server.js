const express = require('express');
const mongoose = require("mongoose");
const passport = require("./config/passport");
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;

const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

app.use(passport.initialize());
app.use(passport.session());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/trailsDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use(require("./routes/api-routes.js"));


app.listen(PORT, () => `Server running on port ${PORT}`);