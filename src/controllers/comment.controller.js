import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { Comment } from "../models/comment.model.js";


const addComment = asyncHandler(async (req, res) => {
    const {videoId} = req.params;
    const {comment} = req.body;
    const commenter = req.user._id;

    if(!comment) throw new ApiError(400, "Write something to comment");
    if(!videoId) throw new ApiError(400, "Video Id is required");
    if(!commenter) throw new ApiError(400, "You need to login to comment");

    const newComment = await Comment.create({
        comment,
        videoId,
        commenter,
    });

    return res.status(201).json(
        new ApiResponse(201, newComment, "Comment added successfully")
    );
})

const editComment = asyncHandler(async (req, res) => {
    const {commentId} = req.params;
    const {comment} = req.body;
    const user = req.user._id;

    const foundComment = await Comment.findById(commentId);
    
    if(!foundComment) throw new ApiError(404, "Comment not found");

    if(foundComment.commenter.toString() !== user.toString()){
        throw new ApiError(401, "You are not authorized to edit this comment");
    }

    const updateComment = await Comment.updateOne({
        comment,
        commenter: user,
        commentId,
    });

    return res.status(200).json(
        new ApiResponse(200, updateComment, "Comment edited successfully")
    );
})

const deleteComment = asyncHandler(async () => {
    
})


export{
    addComment,
    deleteComment,
    editComment, 
}