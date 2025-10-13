import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { publishVideo, getAllVideos, getVideosByUser, deleteVideo} from "../controllers/video.controller.js";
import { upload } from "../middlewares/multer.middleware.js";

const videoRouter = Router();

videoRouter.route("/publish-video").post(
    upload.fields([
        {
            name: "videoFile",
            maxCount: 1,
        },
        {
            name: "thumbnail",
            maxCount: 1,
        }
    ]),
    verifyJWT, publishVideo);

videoRouter.route("/all-videos").get(getAllVideos);

videoRouter.route("/get-users-video/:userId").get(getVideosByUser);

videoRouter.route("/delete-video/:userId").delete(verifyJWT, deleteVideo);


export {videoRouter};