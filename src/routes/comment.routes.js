import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {addComment, deleteComment, editComment } from "../controllers/comment.controller.js"

const commentRouter = Router();


commentRouter.route("/add-comment/:id").post(verifyJWT, addComment);
commentRouter.route("/delete-comment/:id").delete(verifyJWT, deleteComment);

commentRouter.route("/edit-comment/:id").put(verifyJWT, editComment);




export {
    commentRouter,
};