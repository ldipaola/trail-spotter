const mongoose = require("mongoose");
const db = require("../models");

// This file empties the locations

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/trailsDB"
);

const locationSeed = [
  {
    location:{
        coordinates: [145.391199, -37.965790]
    },
      placeName: "Lysterfield Park",
      description: "Lysterfield Park is a public park located in the Greater Melbourne region of Victoria, Australia.",
  },
  {
    location:{
        coordinates: [144.895074, -37.787985]
    },
      placeName: "Quarry Park",
      description: "Quarry Park Mountain Bike Trails",
  },
  {
    location:{
        coordinates: [145.401195, -37.822906]
    },
      placeName: "Magpie MTB Trail Head",
      description: "Hiking/Mountain biking area",
  },
  {
    location:{
        coordinates: [145.017824, -37.788509]
    },
      placeName: "Main Yarra Trail",
      description: "Cycling track close to the CBD",
  },
  {
    location:{
        coordinates: [145.398246, -37.812496]
    },
      placeName: "Baker's Dozen MTB trail",
      description: "Hiking/Mountain biking area",
  },
  {
    location:{
        coordinates: [145.400994, -37.823541]
    },
      placeName: "Magpie MTB Trail Head",
      description: "Hiking/Mountain biking area",
  },
];

db.Location.deleteMany({})
  .then(() => db.Location.collection.insertMany(locationSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
