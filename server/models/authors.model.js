const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: [true, "Please provide a first name!"],
        minLength: [3, "First name must be at least 3 characters long"]
    },

    lastName: {
        type: String,
        required: [true, "Please provide a last name!"],
        minLength: [3, "First name must be at least 3 characters long"]
    }

}, {timestamps: true})

const Author = mongoose.model('Author', AuthorSchema)
module.exports = Author
