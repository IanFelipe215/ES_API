import mongoose from "mongoose";

const movies = new mongoose.Schema({
    title:String,
    author:String
})

const Movie = mongoose.model('Movie', movies)

export default Movie