export const commentPaths = {

  "/api/v1/users/get-user": {
    get: {
      tags: ["User"],
      summary: "User funcitons",
      security: [{ bearerAuth: [] }],

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
};
