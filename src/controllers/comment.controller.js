import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

import { Comment } from "../models/comment.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"



const addComment = asyncHandler(async () => {

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