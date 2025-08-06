import { authPaths } from "./paths/auth.swagger.js"

const apiSpec = {
    openapi: "3.0.0",
    info: {
        title: "Video Stream API",
        version: "1.0.0",
        description: "Video upload and managing api"
    },
    servers: [
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
        }
    ],
    paths: {
        ...authPaths, //Merge authentication paths
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