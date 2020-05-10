const mongoose = require('mongoose')
const Scheme = mongoose.Schema

const bookScheme = new Scheme({
    title:String,
    author:String,
    pages:Number,
    genres:[String],
    rating:Number
})

const Book = mongoose.model('Book',bookScheme)
module.exports = Book




