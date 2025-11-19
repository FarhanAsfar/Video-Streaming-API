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
    if(!thumbnailLocalPath){
        throw new ApiError(400, "Thumbnail file is required");
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
    const videos = await Video.find({}).select("-updatedAt");

    return res.status(200).json(
        new ApiResponse(200, videos, "Fetched all videos")
    )
 })

 const getVideosByUser = asyncHandler(async (req, res) => {
    // don't write const userId = req.params. because req.params returns an object and we need to destructure it to get only the user id. 'req.params' = {userId: "345sdfswi23"}

    // this 'userId' should match with route declaration, like: /api/v1/video/get-users-video/:userId
    const {userId} = req.params;
    console.log(userId);

    const userExists = await User.findById(userId);
    if(!userExists){
        throw new ApiError(404, "User not found");
    }

    if(!userId){
        throw new ApiError(400, "User-Id is required to fetch a user's videos")
    }
    
    const videos = await Video.find({
        owner: userId
    }).sort({createdAt: -1});

    if(videos.length === 0){
        return res.status(200).json(
            new ApiResponse(200, [], "This user hasn't uploaded any videos yet")
        );
    }
    
    return res.status(200).json(
        new ApiResponse(200, videos, "Fetched all videos")
    );
 })

 const deleteVideo = asyncHandler(async (req, res) => {
    const userId = req.user._id;
    const {videoId} = req.params;

    if(!videoId){
        throw new ApiError(400, "Video Id is required to delete a video");
    }

    const video = await Video.findById(videoId);

    if(!video){
        throw new ApiError(404, "Video not found");
    }

    if(video.owner.toString() !== userId.toString()){
        throw new ApiError(403, "You are not authorized to delete this video");
    }

    await Video.deleteOne();

    return res.status(200).json(
        new ApiResponse(200, video, "Video deleted successfully")
    );
 })

export{
    publishVideo,
    getAllVideos,
    getVideosByUser,
    deleteVideo,
}
