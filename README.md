# Video Publishing API

A REST API built with Node.js, Express, and MongoDB, enabling video publishing, user management, and commenting with secure JWT authentication, Cloudinary for video/thumbnail uploads. The API is deployed on Render with Swagger/OpenAPI documentation.

## Features
- **RESTful Endpoints**: Publish, retrieve, and delete videos (`/publish-video`, `/all-videos`, `/delete-video/:videoId`), manage user profiles (`/get-user`, `/update-account`), and handle comments (`/add-comment/:videoId`).
- **Authentication**: JWT-based auth with refresh tokens and secure logout.
- **File Uploads**: Cloudinary integration for video and thumbnail uploads (`/publish-video`) and user avatar/cover image updates.
- **Documentation**: Swagger/OpenAPI UI for interactive endpoint exploration.
- **Deployment**: Dockerized services deployed on Render, with CI/CD via GitHub Actions.

## Tech Stack
- **Languages**: JavaScript
- **Frameworks**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Auth**: JWT
- **File Storage**: Cloudinary
- **Documentation**: Swagger/OpenAPI

## Installation

### Prerequisites
- Node.js v20+
- MongoDB (local or Atlas)
- Cloudinary account
- Docker (optional for containerized setup)

## Steps
 ### Clone the Repository
   ```bash
   git clone https://github.com/FarhanAsfar/video-streaming-api.git
   cd video-streaming-api
   ```

   ### Install Dependencies
   ```bash
   npm install
   ```

### Create a .env file in the root directory:
```.env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/video-streaming-api
JWT_SECRET=your_jwt_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## Running

Run Locally:
```bash
npm start
```

## Link
https://video-streaming-api-44j0.onrender.com/
