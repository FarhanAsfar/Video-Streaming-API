export const commentPaths = {

  "/api/v1/comments/add-comment/:id": {
    get: {
      tags: ["Comments"],
      summary: "Add Comments",
      security: [{ bearerAuth: [] }],

      responses: {
        200: {
          description: "Comments information",
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
                        example: "Not worthy",
                      },
                      username: { type: "string", example: "john" },
                      email: {type: "string", example: "john@gmail.com"},
                      fullName: {type: "string", example: "John Doe"},
                      avatar: {type: "string", example: "image-link"},
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
            description: "Could not fetch user comment"
        }
      },
    },
  },
};
