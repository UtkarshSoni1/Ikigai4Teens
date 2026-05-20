import mongoose, {  Types } from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
    },
    password: String,
    
});

const user = mongoose.model('users', userSchema);

export default user;
