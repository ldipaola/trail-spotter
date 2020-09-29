const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const JWT = require("jsonwebtoken");
const { isEmail } = require('validator');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: [isEmail, 'Please enter a valid email']
    },
    password: {
      type: String,
      required:[true, 'Please enter a password'],
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", function (next) {
  if (this.isNew) {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(this.password, salt);
    this.password = hash;
  }
  next();
});

UserSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

UserSchema.methods.getJWT = function () {
  return JWT.sign({ userId: this._id }, jwtSecret);
};

module.exports = mongoose.model("User", UserSchema);
