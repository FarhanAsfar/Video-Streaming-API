import { Router } from "express";
import { loginUser, logoutUser, registerUser, refreshAccessToken, getCurrentUser, getUserChannelProfile, changeCurrentPassword, updateAccount, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controller.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const userRouter = Router();

userRouter.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
)

userRouter.route("/login").post(loginUser)

userRouter.route("/logout").post(verifyJWT, logoutUser)

userRouter.route("/refresh-token").post(refreshAccessToken)

userRouter.route("/get-user").get(verifyJWT, getCurrentUser)

userRouter.route("/get-user-channel").get(verifyJWT, getUserChannelProfile)

userRouter.route("/change-password").patch(verifyJWT, changeCurrentPassword)

userRouter.route("/update-account").put(verifyJWT, updateAccount)

userRouter.route("/change-avatar").patch(verifyJWT, updateUserAvatar)

userRouter.route("/change-cover-image").patch(verifyJWT, updateUserCoverImage)


export {
  userRouter
};
