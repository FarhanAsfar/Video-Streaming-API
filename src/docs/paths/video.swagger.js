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
  "/api/v1/video/delete-video/{videoId}": {
  delete: {
    tags: ["Video"],
    summary: "Delete a video",
    description: "Delete a video by ID. Only the video owner can delete their own videos.",
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "videoId",
        in: "path",
        required: true,
        description: "ID of the video to delete",
        schema: {
          type: "string",
          example: "689b7747956a121799fd41be"
        }
      }
    ],
    responses: {
      200: {
        description: "Video deleted successfully",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                statusCode: {
                  type: "integer",
                  example: 200
                },
                data: {
                  type: "object",
                  example: {}
                },
                message: {
                  type: "string",
                  example: "Video deleted successfully"
                },
                success: {
                  type: "boolean",
                  example: true
                }
              }
            }
          }
        }
      },
      400: {
        description: "Video ID is required",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                success: {
                  type: "boolean",
                  example: false
                },
                message: {
                  type: "string",
                  example: "Video Id is required to delete a video"
                }
              }
            }
          }
        }
      },
      403: {
        description: "Not authorized to delete this video",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                success: {
                  type: "boolean",
                  example: false
                },
                message: {
                  type: "string",
                  example: "You are not authorized to delete this video"
                }
              }
            }
          }
        }
      },
      404: {
        description: "Video not found",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                success: {
                  type: "boolean",
                  example: false
                },
                message: {
                  type: "string",
                  example: "Video not found"
                }
              }
            }
          }
        }
      },
      401: {
        description: "Unauthorized - Invalid or missing token"
      }
    }
  }
}
}