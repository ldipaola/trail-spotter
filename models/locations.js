const mongoose = require('mongoose');
const { Schema } = mongoose;

const locationSchema  = new Schema({
    placeName:  {
        type: String,
        required: [true, "Please add a place name"],
        trim: true,
    },
    location: {
        type: {
          type: String, 
          enum: ['Point'], 
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
      },
    date: { type: Date, default: Date.now }
  });

  module.exports = mongoose.model("Location", locationSchema);