import mongoose from "mongoose";

const movies = new mongoose.Schema({
    title:String,
    author:String,
    description:String,
    release_date:Number
})

const Movie = mongoose.model('Movie', movies)

export default Movie