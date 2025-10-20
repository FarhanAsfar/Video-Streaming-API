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

const editComment = asyncHandler(async () => {
    
})

const deleteComment = asyncHandler(async () => {
    
})


export{
    addComment,
    deleteComment,
    editComment, 
}