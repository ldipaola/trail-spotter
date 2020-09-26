import mongoose from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
    email: {
        type: String,
    },
    password: {
        type: String,
    } 
    }, {timestamps: true});
  
  const User = mongoose.model("User", UserSchema);
  
  export default User;