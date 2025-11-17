export const userPaths = {
  "/api/v1/users/get-all-user": {
    get: {
      tags: ["User"],
      summary: "Get all Users list",
      // security: [{ bearerAuth: [] }],

      responses: {
        200: {
          description: "Get all users information",
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
                      username: { type: "string", example: "john" },
                      email: {type: "string", example: "john@gmail.com"},
                      fullName: {type: "string", example: "John Doe"},
                      avatar: {type: "string", example: "image-link"},
                      coverImage: {type: "string", example: "image-link"},
                      watchHistory: {type:"object", example: []},

                    },
                  },
                  message: {
                    type: "string",
                    example: "Fetched current user information",
                    success: true
                  }
                },
              },
            },
          },
        },
        500: {
            description: "Could not fetch user information"
        }
      },
    },
  },
  "/api/v1/users/get-user-channel/{username}": {
    get: {
      tags: ["User"],
      summary: "User funcitons",
      security: [{ bearerAuth: [] }],
      parameters: [  
        {
          name: "username",
          in: "path",  
          required: true,
          description: "Name the user to fetch",
          schema: {
            type: "string",
            example: "john"
          }
        }
      ],

      responses: {
        200: {
          description: "Current user information",
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
                      username: { type: "string", example: "john" },
                      email: {type: "string", example: "john@gmail.com"},
                      fullName: {type: "string", example: "John Doe"},
                      avatar: {type: "string", example: "image-link"},
                      coverImage: {type: "string", example: "image-link"},
                      watchHistory: {type:"object", example: []},

                    },
                  },
                  message: {
                    type: "string",
                    example: "Fetched current user information",
                    success: true
                  }
                },
              },
            },
          },
        },
        500: {
            description: "Could not fetch user information"
        }
      },
    },
  },
  //update user account
  "/api/v1/users/update-account": {
    put: {
      tags: ["User"],
      summary: "Update account of the logged in user",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["username", "email"],
              properties: {
                username: {
                  type: "string",
                  example: "John Doe",
                },
                email: {
                  type: "string",
                  format: "email",
                  example: "john-new@gmail.com",
                },
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: "Account updated successfully",
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
                    properties: {
                      _id: { type: "string", example: "66328d1276d4cf89eb123456" },
                      username: { type: "string", example: "John New" },
                      email: {type: "string", format:"email", example: "updated-john@gmail.com"},
                    }
                  },
                  message: {
                    type: "string",
                    example: "Account updated successfully"
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Could not update account"
        }
      }
    }
  },
  //change user password
  "/api/v1/users/change-password": {
    patch: {
      tags: ["User"],
      security: [{ bearerAuth: [] }],
      summary: "Change password of the logged in user",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["password",],
              properties: {
                oldPassword: {
                  type: "string",
                  format: "password",
                  example: "your-old-password",
                },
                newPassword: {
                  type: "string",
                  format: "password",
                  example: "your-new-password",
                },
              }
            }
          }
        }
      },
      responses: {
        200: {
          description: "Password changed successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  statusCode: {
                    type: "integer",
                    example: 200
                  },
                  message: {
                    type: "string",
                    example: "Password changed successfully"
                  }
                }
              }
            }
          }
        },
        400: {
          description: "Could not change password"
        }
      }
    }
  },
  "/api/v1/users/change-avatar": {
  patch: {  
    tags: ["User"],
    summary: "Change user avatar",
    description: "Upload and update the avatar image for the current user",
    security: [{ bearerAuth: [] }],
    requestBody: {
      required: true,
      content: {
        "multipart/form-data": {
          schema: {
            type: "object",
            required: ["avatar"],
            properties: {
              avatar: {
                type: "string",
                format: "binary",  
                description: "Avatar image file (JPEG, PNG, etc.)"
              }
            }
          }
        }
      }
    },
    responses: {
      200: {
        description: "Avatar updated successfully",
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
                  properties: {
                    _id: {
                      type: "string",
                      example: "689b7747956a121799fd41be"
                    },
                    username: {
                      type: "string",
                      example: "john"
                    },
                    email: {
                      type: "string",
                      example: "john@gmail.com"
                    },
                    fullName: {
                      type: "string",
                      example: "John Doe"
                    },
                    avatar: {
                      type: "string",
                      format: "uri",
                      example: "https://res.cloudinary.com/your-cloud/image/upload/v1234567890/avatar.jpg"
                    },
                    coverImage: {
                      type: "string",
                      example: "https://res.cloudinary.com/your-cloud/image/upload/cover.jpg"
                    }
                  }
                },
                message: {
                  type: "string",
                  example: "Avatar updated"
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
        description: "Avatar is missing or upload failed",
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
                  example: "Avatar is missing"
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
};
