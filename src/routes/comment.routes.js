import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {addComment, deleteComment, editComment } from "../controllers/comment.controller.js"

const commentRouter = Router();


commentRouter.route("/add-comment/:videoId").post(verifyJWT, addComment);
commentRouter.route("/delete-comment/:commentId").delete(verifyJWT, deleteComment);

commentRouter.route("/edit-comment/:commentId").put(verifyJWT, editComment);




export {
    commentRouter,
};