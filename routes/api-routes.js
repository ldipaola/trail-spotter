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
    isAdmin: req.user.isAdmin
  });
});

// Route for signing up a user. The user's password is automatically hashed and stored securely.
// otherwise send back an error
router.post("/api/signup", async (req, res) => {
  const user = await db.User.findOne({ email: req.body.email });
  if (user){ 
    res.status(409);
    res.send("Account already exists");}
  else {
     await db.User.create({
      email: req.body.email,
      password: req.body.password
    });
    res.status(200);
    res.send("Success, user created");
  }
    
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

router.get("/api/location", async (req, res) => {
  try {
    const locations = await db.Location.find();
    return res.status(200).json({
      success: true,
      count: locations.length,
      data: locations
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});
router.post("/api/location", async (req, res) => {
  try {
    const location = await db.Location.create(req.body);
    return res.status(200).json({
      success: true,
      data: location
    })
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
