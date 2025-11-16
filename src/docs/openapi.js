import dotenv from "dotenv"
import { authPaths } from "./paths/auth.swagger.js"
import { userPaths } from "./paths/user.swagger.js";
import { commentPaths } from "./paths/comment.swagger.js";
import { videoPaths } from "./paths/video.swagger.js";
import { likePaths } from "./paths/like.swagger.js";
dotenv.config();

const apiSpec = {
    openapi: "3.0.0",
    info: {
        title: "Video Publishing API",
        version: "1.0.0",
        description: "Video upload and managing api"
    },
    servers: [
        {
            url: "https://video-streaming-api-44j0.onrender.com",
            description: "Production Server"
        },
        {
            url: process.env.PORT ? `http://localhost:${process.env.PORT}` : "http://localhost:3001",
            description: "Development Server"
        }
    ],
    tags: [
        {
            name: "Authentication",
            description: "User authentication endpoints",
        },
        {
            name: "User",
            description: "User account endpoints",
        },
        {
            name: "Video",
            description: "Video related endpoints"
        },
        {
            name: "Comments",
            description: "Comments related endpoints"
        },
        // {
        //     name: "Likes",
        //     description: "Likes related endpoints"
        // }
    ],
    paths: {
        ...authPaths, //Merge authentication paths
        ...userPaths,
        ...videoPaths,
        ...commentPaths,
        ...likePaths,
    },
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "http",
                scheme: "bearer",
                bearerFormat: "JWT"
            }
        }
    }
}

export{
    apiSpec
}