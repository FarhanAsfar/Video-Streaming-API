import express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

import {userRouter} from "./src/routes/user.routes.js"
import {videoRouter} from "./src/routes/video.routes.js"
import {likeRouter} from "./src/routes/like.routes.js"
import {commentRouter} from "./src/routes/comment.routes.js"

import { errorHandler } from "./src/middlewares/error.middleware.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser());


//routes decalaration
app.use("/api/v1/users", userRouter);
// app.use("/api/v1/video", videoRouter);
// app.use("/api/v1/like", likeRouter);
// app.use("/api/v1/comment", commentRouter);

app.use(errorHandler) //middleware to handle error response

export {app};