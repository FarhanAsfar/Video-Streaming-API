import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { publishVideo, getAllVideos, getVideoById, deleteVideo} from "../controllers/video.controller.js";
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

videoRouter.route("/get-video/:id").get(verifyJWT, getVideoById);

videoRouter.route("/delete-video/:id").delete(verifyJWT, deleteVideo);


export {videoRouter};