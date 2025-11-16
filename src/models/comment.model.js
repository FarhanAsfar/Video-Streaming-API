import mongoose, {Schema} from "mongoose";

const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: true,
    },
    videoId: {
        type: Schema.Types.ObjectId,
        ref: 'Video',
    },
    commenter: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
}, {timestamps: true});


const Comment = mongoose.model('Comment', commentSchema);


export{
    Comment, 
}