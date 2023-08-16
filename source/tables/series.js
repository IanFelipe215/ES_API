import mongoose from "mongoose"

const series = new mongoose.Schema({
    title:String,
    author:String,
    seasons:Number,
    episodes:Number
})

const Serie = mongoose.model('Serie',series)

export default Serie