// Requiring our models and passport as we've configured it
const router = require("express").Router();
const db = require("../models");
const ObjectId = require("mongodb").ObjectId;
const passport = require("../config/passport");

router.get("/api/blog", (req, res) => {
  // Will add to this later
  res.json({
    test: "test blog",
  });
});

// Using the passport.authenticate middleware with our local strategy.
// If the user has valid login credentials, send them to the members page.
// Otherwise the user will be sent an error
router.post("/api/login", passport.authenticate("local"), (req, res) => {
  res.json({
    email: req.user.email,
    id: req.user.id,
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely.
// otherwise send back an error
router.post("/api/signup", async (req, res) => {
  db.User.findOne({ email: req.body.email }),
    async (err, doc) => {
      if (err) throw err;
      if (doc) res.send("User Already Exists");
      if (!doc) {
        const user = new db.User(req.body);
        await user.save();
        res.send("Success");
      }
    };
});

// Route for logging user out
router.get("/logout", (req, res) => {
  req.logout();
  res.send("Success");
});

// Route for getting some data about our user to be used client side
router.get("/api/userAuthenticated", (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back null
    res.json(null);
  } else {
    res.json({
      id: req.user._id,
      email: req.user.email,
    });
  }
});

router.post("/api/post", async (req, res) => {
  const { title, author, body } = req.body;
  await db.Blog.create({
    title: title,
    author: author,
    body: body,
  })
    .then((blogPost) => {
      res.json(blogPost);
    })
    .catch((err) => console.log(err));
});

module.exports = router;
