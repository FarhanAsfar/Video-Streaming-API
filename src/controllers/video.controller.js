import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import {Video} from "../models/video.model.js"
import { uploadOnCloudinary } from "../utils/cloudinary.js"
 

 const publishVideo = asyncHandler(async (req, res) => {
    const {title, description, duration, views} = req.body;

    const owner = req.user._id;
    
    if (!title) {
        throw new ApiError(400, "Title is required");
    }

    const videoLocalPath = req.files?.videoFile?.[0]?.path;
    const thumbnailLocalPath = req.files?.thumbnail?.[0]?.path;

    if(!videoLocalPath){
        throw new ApiError(400, "Video file is required");
    }

    //uploading video and thumbnail on cloudinary
    const video = await uploadOnCloudinary(videoLocalPath);
    const thumbnail = await uploadOnCloudinary(thumbnailLocalPath);

    if(!video.secure_url || !thumbnail.secure_url){
        throw new ApiError (500, "Could not upload video/thumbnail on cloudinary");
    }

    const newVideo = await Video.create({
        videoFile: video.secure_url,
        thumbnail: thumbnail.secure_url,
        title,
        description,
        duration,
        views: views || 0,
        owner,
    });
    //console.log(req.user.username);

    return res.status(201).json(
        new ApiResponse(201, newVideo, "Video published successfully!")
    );
 });

 const getAllVideos = asyncHandler(async (req, res) => {
    const videos = await Video.find({});

    return res.status(200).json(
        new ApiResponse(200, videos, "All videos")
    )
 })

 const getVideoById = asyncHandler(async () => {
    
 })

 const deleteVideo = asyncHandler(async () => {
    
 })

export{
    publishVideo,
    getAllVideos,
    getVideoById,
    deleteVideo,
}
