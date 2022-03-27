const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please Enter your Name ! "],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please Enter your Email ! "],
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Please Enter your Password ! "],

    },
    role: {
        type: Number,
        default: 0,//0-user 1-admin
    },
    avatar: {
        type: String,
        default: "https://res.cloudinary.com/drh7slbsz/image/upload/v1631565553/m2t4rshaliad1hfkzg7h.jpg",
    }
}, {
    timestamps: true,
});
module.exports = mongoose.model('Users', userSchema);