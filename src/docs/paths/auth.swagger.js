// docs/paths/auth.js

export const authPaths = {
  "/api/v1/users/register": {
    post: {
      tags: ["Authentication"],
      summary: "Register a new user",
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["fullname", "email", "password"],
              properties: {
                username: {
                  type: "string",
                  example: "John Doe"
                },
                email: {
                  type: "string",
                  format: "email",
                  example: "john@example.com"
                },
                password: {
                  type: "string",
                  format: "password",
                  example: "securePassword123"
                }
              }
            }
          }
        }
      },
      responses: {
        201: {
          description: "User created successfully",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  success: {
                    type: "boolean",
                    example: true
                  },
                  message: {
                    type: "string",
                    example: "User registered successfully"
                  },
                  user: {
                    type: "object",
                    properties: {
                      _id: {
                        type: "string",
                        example: "6093dfa3b45e234567890123"
                      },
                      username: {
                        type: "string",
                        example: "John Doe"
                      },
                      email: {
                        type: "string",
                        example: "john@example.com"
                      }
                    }
                  }
                }
              }
            },
            400: {
              description: "Invalid input data"
            }
          }
        }
      },
    }
  },
  
};
