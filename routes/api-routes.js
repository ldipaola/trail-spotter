// Requiring our models and passport as we've configured it
const router = require("express").Router();
const db = require('../models');
const ObjectId = require('mongodb').ObjectId;
const passport = require("../config/passport");


router.get("/api/blog", (req, res) => {
    // Will add to this later
    res.json({
      test:"test blog"})
});

  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  router.post("/api/login", passport.authenticate("local"), (req, res) => {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely.
  // otherwise send back an error
  router.post("/api/signup", async (req, res) => {
      const user = new db.User(req.body);
      try {
        await user.save();
        res.json("Success");
      } catch (e) {
        res.status(401).json(err);
      }
  });

  // Route for logging user out
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  router.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      res.json({
        email: req.user.email,
        id: req.user._id,
        createdAt: req.user.createdAt,
      });
    }
  });

  router.post("/api/post", async (req, res) => {
    const {title, author, body} = req.body;
    await db.Blog.create(
    {
      title:  title,
      author: author,
      body:   body,
    }
    ).then((blogPost) => {
      res.json(blogPost);
    }).catch((err) => console.log(err)) 
  });

module.exports = router;
