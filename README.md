# Video Streaming API

A production-ready REST API built with Node.js, Express, and MongoDB, enabling video publishing, user management, and commenting with secure JWT authentication, Cloudinary for video/thumbnail uploads, and comprehensive testing with Jest/Supertest. The API is Dockerized, deployed on Render with Swagger/OpenAPI documentation, and uses GitHub Actions for CI/CD, supporting 100+ concurrent users with 90% test coverage.

## Features
- **RESTful Endpoints**: Publish, retrieve, and delete videos (`/publish-video`, `/all-videos`, `/delete-video/:videoId`), manage user profiles (`/get-user`, `/update-account`), and handle comments (`/add-comment/:videoId`).
- **Authentication**: JWT-based auth with refresh tokens and secure logout.
- **File Uploads**: Cloudinary integration for video and thumbnail uploads (`/publish-video`) and user avatar/cover image updates.
- **Testing**: 8+ Jest/Supertest unit and integration tests ensuring 90% coverage.
- **Documentation**: Swagger/OpenAPI UI for interactive endpoint exploration.
- **Deployment**: Dockerized services deployed on Render, with CI/CD via GitHub Actions.
- **Scalability**: Handles 100+ concurrent users, optimized with MongoDB indexing.

## Tech Stack
- **Languages**: JavaScript
- **Frameworks**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT
- **File Storage**: Cloudinary
- **Testing**: Jest, Supertest
- **Documentation**: Swagger/OpenAPI
- **DevOps**: Docker, GitHub Actions, Render

## Installation
### Prerequisites
- Node.js v20+
- MongoDB (local or Atlas)
- Cloudinary account
- Docker (optional for containerized setup)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/FarhanAsfar/video-streaming-api.git
   cd video-streaming-api


Install Dependencies
npm install


Set Up Environment VariablesCreate a .env file in the root directory:
PORT=3000
MONGODB_URI=mongodb://localhost:27017/video-streaming-api
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret


Run Locally
npm start

API runs at http://localhost:3000. Access Swagger docs at /api-docs.

Run Tests
npm test


Run with Docker
docker build -t arnob21/video-streaming-api .
docker run -p 3000:3000 --env-file .env arnob21/video-streaming-api



API Endpoints



Method
Endpoint
Description
Auth Required



POST
/api/v1/users/login
User login
None


POST
/api/v1/users/logout
User logout
JWT


POST
/api/v1/users/refresh-token
Refresh access token
None


GET
/api/v1/users/get-user
Get current user profile
JWT


GET
/api/v1/users/get-user-channel/:username
Get user channel profile
JWT


PATCH
/api/v1/users/change-password
Change user password
JWT


PUT
/api/v1/users/update-account
Update user account
JWT


PATCH
/api/v1/users/change-avatar
Update user avatar (Cloudinary)
JWT


PATCH
/api/v1/users/change-cover-image
Update cover image (Cloudinary)
JWT


GET
/api/v1/users/watch-history
Get user watch history
JWT


POST
/api/v1/videos/publish-video
Publish video (Cloudinary)
JWT


GET
/api/v1/videos/all-videos
Retrieve all videos
None


GET
/api/v1/videos/get-users-video/:userId
Get videos by user
None


DELETE
/api/v1/videos/delete-video/:videoId
Delete a video
JWT


POST
/api/v1/comments/add-comment/:videoId
Add comment to a video
JWT


DELETE
/api/v1/comments/delete-comment/:commentId
Delete a comment
JWT


PATCH
/api/v1/comments/edit-comment/:commentId
Edit a comment
JWT


Explore all endpoints via Swagger at https://video-streaming-api-44j0.onrender.com/api-docs.
Deployment

Live Demo: https://video-streaming-api-44j0.onrender.com/
Docker Image: https://hub.docker.com/r/arnob21/video-streaming-api (replace with actual URL)
CI/CD: Automated builds and deployments via GitHub Actions. See .github/workflows/build.yml and .github/workflows/deploy.yml.



