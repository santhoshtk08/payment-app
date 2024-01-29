const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://santhoshtk2001:RcGMgS8Uy5Wj1pfx@cluster0.14nesto.mongodb.net/")


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowecase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 30,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 30,
        trim: true
    }

})

const User = mongoose.model('User', userSchema);

module.exports = {
    User
}