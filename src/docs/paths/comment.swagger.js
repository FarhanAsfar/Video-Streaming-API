export const commentPaths = {
    "/api/v1/comments/add-comment/{videoId}": {
  post: {
    tags: ["Comments"],
    summary: "Add a comment to a video",
    description: "Post a new comment on a specific video. Requires authentication.",
    security: [{ bearerAuth: [] }],
    parameters: [
      {
        name: "videoId",
        in: "path",
        required: true,
        description: "ID of the video to comment on",
        schema: {
          type: "string",
          example: "689b7747956a121799fd41be"
        }
      }
    ],
    requestBody: {
      required: true,
      content: {
        "application/json": {
          schema: {
            type: "object",
            required: ["comment"],
            properties: {
              comment: {
                type: "string",
                example: "This is an amazing video! Thanks for sharing.",
                description: "The comment text"
              }
            }
          }
        }
      }
    },
    responses: {
      201: {
        description: "Comment added successfully",
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                statusCode: {
                  type: "integer",
                  example: 201
                },
                data: {
  type: "object",
  properties: {
    _id: {
      type: "string",
      example: "689b7747956a121799fd41be"
    },
    comment: {
      type: "string",
      example: "This is an amazing video! Thanks for sharing."
    },
    videoId: {
      type: "string",
      example: "689b7747956a121799fd41be"
    },
    commenter: {
      type: "object",
      properties: {
        _id: {
          type: "string",
          example: "608f9e234567890123456789"
        },
        username: {
          type: "string",
          example: "john"
        },
        avatar: {
          type: "string",
          format: "uri",
          example: "https://res.cloudinary.com/your-cloud/image/upload/avatar.jpg"
        },
        fullName: {
          type: "string",
          example: "John Doe"
        }
      }
    },
    createdAt: {
      type: "string",
      format: "date-time",
      example: "2025-11-20T10:30:00.000Z"
    },
    updatedAt: {
      type: "string",
      format: "date-time",
      example: "2025-11-20T10:30:00.000Z"
    }
  }
},
                message: {
                  type: "string",
                  example: "Comment added successfully"
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
        description: "Bad request - Missing comment text or video ID",
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
                  example: "Write something to comment"
                },
                errors: {
                  type: "array",
                  items: {
                    type: "string"
                  },
                  example: []
                }
              }
            }
          }
        }
      },
      401: {
        description: "Unauthorized - User not logged in or invalid token",
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
                  example: "You need to login to comment"
                }
              }
            }
          }
        }
      },
      404: {
        description: "Video not found"
      }
    }
  }
},
};
