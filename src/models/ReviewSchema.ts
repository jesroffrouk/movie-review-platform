import mongoose from "mongoose";

const ReviewSchema = new mongoose.Schema({
    "userid" :{ 
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    "movieid":{
        type: String,
        required: true,
    },
    "reviews":{
        type: String,
        required: true
    },
    'rating': {
        type: Number,
        min: 1,
        max: 10,
        required: true
    }

},{
    timestamps: true
})

ReviewSchema.index({ userid: 1, movieid: 1 }, { unique: true });

const Review = mongoose.models.reviews || mongoose.model('reviews', ReviewSchema)

export default Review;