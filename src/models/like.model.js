import mongoose, {Schema} from "mongoose";

const likeSchema = new mongoose.Schema({
    video: {
        type: Schema.Types.ObjectId,
        ref: 'Video',
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
    },
    likedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true});


const Like = mongoose.model("Like", likeSchema);

export {
    Like
}