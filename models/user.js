const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    } 
    }, {timestamps: true});

    UserSchema.pre("save", async function(next) {
        const user = this;

        if (user.isModified("password")) {
            user.password = await bcrypt.hash(user.password, 8);
        }
        next();
    });
  
module.exports = mongoose.model("User", UserSchema);
  
