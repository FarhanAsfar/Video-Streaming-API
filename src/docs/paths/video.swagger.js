export const videoPaths = {
    "/api/v1/video/all-videos": {
    get: {
      tags: ["Video"],
      summary: "Get all videos",
      // security: [{ bearerAuth: [] }],

      responses: {
        200: {
          description: "Get all videos",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  statusCode: {
                    type: "integer",
                    example: 200,
                  },
                  data: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "689b7747956a121799fd41be",
                      },
                      videoFile: {
                        type: "string",
                        example: "https://res.cloudinary.com/drrr1gmop/image/upload/v1763271234/oti6lxp7pp5ezj4cemli.jpg"
                    },
                    thumbnail: {
                        type: "string",
                        example:"https://res.cloudinary.com/drrr1gmop/image/upload/v1763271236/yvrpa1e3yelxttxqbjgy.jpg"
                    },
                    title: {type: "string", example:"What is event loop?"},
                    description:{type: "string", example: "Explanation of event loop in node.js"},
                    duration: {type: "string", example: "13:23"},
                    views: {type: "integer", example: 2345},
                    isPublished: {type: "string", example: "true"},
                    owner: {type: "string", example: "689b7747956a121799fd41be"},
                    createdAt: {type:"string", format:"date-time", example:"2025-11-16T05:33:57.428Z"},
                    },
                  },
                  message: {
                    type: "string",
                    example: "Fetched videos",
                    success: true
                  }
                },
              },
            },
          },
        },
        500: {
            description: "Could not fetch videos"
        }
      },
    },
  },
}