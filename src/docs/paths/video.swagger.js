export const videoPaths = {
    "/api/v1/videos/publish-video": {
  post: {
    tags: ["Video"],
    summary: "Publish a new video",
    description: "Upload a video file with thumbnail and publish it to the platform",
    security: [{ bearerAuth: [] }],
    requestBody: {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            required: ["videoFile", "thumbnail", "title"],
            properties: {
              videoFile: {
                type: "string",
                format: "binary",
                description: "Video file to upload (MP4, AVI, MOV, etc.)"
              },
              thumbnail: {
                type: "string",
                format: "binary",
                description: "Thumbnail image for the video (JPEG, PNG, etc.)"
              },
              title: {
                type: "string",
                example: "My Awesome Video",
                description: "Title of the video (required)"
              },
              description: {
                type: "string",
                example: "This is a description of my awesome video",
                description: "Description of the video (optional)"
              },
              duration: {
                type: "number",
                example: 120,
                description: "Duration of the video in seconds (optional)"
              },
              views: {
                type: "integer",
                example: 0,
                description: "Initial view count (optional, defaults to 0)"
              }
            }
          }
        }
      }
    },
    responses: {
      201: {
        description: "Video published successfully",
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
                    videoFile: {
                      type: "string",
                      format: "uri",
                      example: "https://res.cloudinary.com/your-cloud/video/upload/v1234567890/video.mp4"
                    },
                    thumbnail: {
                      type: "string",
                      format: "uri",
                      example: "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/thumbnail.jpg"
                    },
                    title: {
                      type: "string",
                      example: "My Awesome Video"
                    },
                    description: {
                      type: "string",
                      example: "This is a description of my awesome video"
                    },
                    duration: {
                      type: "number",
                      example: 120
                    },
                    views: {
                      type: "integer",
                      example: 0
                    },
                    owner: {
                      type: "string",
                      example: "608f9e234567890123456789"
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
                  example: "Video published successfully!"
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
        description: "Bad request - Missing required fields or files",
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
                  example: "Title is required"
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
        description: "Unauthorized - Invalid or missing token"
      },
      500: {
        description: "Server error - Failed to upload to Cloudinary",
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
                  example: "Could not upload video/thumbnail on cloudinary"
                }
              }
            }
          }
        }
      }
    }
  }
  },
    "/api/v1/videos/all-videos": {
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
  "/api/v1/videos/get-users-video/{userId}": {
  get: {
    tags: ["Video"],
    summary: "Get all videos by a specific user",
    description: "Fetch all videos uploaded by a specific user using their user ID",
    parameters: [
      {
        name: "userId",
        in: "path",
        required: true,
        description: "ID of the user whose videos to fetch",
        schema: {
          type: "string",
          example: "689b7747956a121799fd41be"
        }
      }
    ],
    responses: {
      200: {
        description: "Successfully fetched user's videos",
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
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "689b7747956a121799fd41be"
                      },
                      videoFile: {
                        type: "string",
                        format: "uri",
                        example: "https://res.cloudinary.com/your-cloud/video/upload/v1234567890/video.mp4"
                      },
                      thumbnail: {
                        type: "string",
                        format: "uri",
                        example: "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/thumbnail.jpg"
                      },
                      title: {
                        type: "string",
                        example: "My Awesome Video"
                      },
                      description: {
                        type: "string",
                        example: "This is a description of my awesome video"
                      },
                      duration: {
                        type: "number",
                        example: 120
                      },
                      views: {
                        type: "integer",
                        example: 1500
                      },
                      owner: {
                        type: "string",
                        example: "689b7747956a121799fd41be"
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
                  }
                },
                message: {
                  type: "string",
                  example: "Fetched all videos"
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
        description: "User ID is missing",
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
                  example: "User-Id is required to fetch a user's videos"
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
      404: {
        description: "User not found or has no videos",
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
                  example: "No videos found for this user"
                }
              }
            }
          }
        }
      }
    }
  }
},
  "/api/v1/videos/delete-video/{videoId}": {
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
  },
}