const mongoose = require('mongoose');

const userModel = mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        trim: true
    },
    picture: {
        type: String,
        required: true,
        default: 'https://icon-library.com/icon/anonymous-avatar-icon-25.html.html'
    },

}, {
    timestamps: true,
});

const User = mongoose.model("User", userModel);

module.exports = User;
