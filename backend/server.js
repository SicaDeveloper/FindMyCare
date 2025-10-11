const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const routes = require("./routes");
const { AuthorizationCode } = require("simple-oauth2");
const { apiReference } = require("@scalar/express-api-reference");
const path = require("path");
const swaggerJsdoc = require("swagger-jsdoc");

// Dynamic OpenAPI generation via swagger-jsdoc
const swaggerOptions = {
  definition: {
    openapi: "3.0.3",
    info: {
      title: "FindMyCare API",
      version: "1.0.0",
      description: "API documentation for FindMyCare backend (Scalar)",
    },
    servers: [
      { url: "http://localhost:3000", description: "Local" },
    ],
  },
  // Scan backend route/controller files for @openapi JSDoc
  apis: [
    path.join(__dirname, "routes/**/*.js"),
    path.join(__dirname, "controller/**/*.js"),
  ],
};
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// OAuth2 configuration - update these values with your actual OAuth provider details
const oauth2 = new AuthorizationCode({
  client: {
    id: process.env.OAUTH_CLIENT_ID || 'your_client_id',
    secret: process.env.OAUTH_SECRET || 'your_client_secret',
  },
  auth: {
    tokenHost: process.env.OAUTH_TOKEN_HOST || 'https://your-oauth-provider.com',
    tokenPath: process.env.OAUTH_TOKEN_PATH || '/oauth/token',
    authorizePath: process.env.OAUTH_AUTHORIZE_PATH || '/oauth/authorize',
  },
});

dotenv.config();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true // Allow cookies to be sent
}));
app.use(express.json());
app.use(cookieParser()); // Parse cookies

app.use("/api", routes);

// Serve OpenAPI document for clients/tools (dynamic)
app.get("/openapi.json", (req, res) => {
  res.json(swaggerSpec);
});

// Scalar API reference UI
app.use(
  "/api-docs",
  apiReference({
    theme: "default",
    spec: {
      url: "/openapi.json",
    },
    layout: "classic",
  })
);

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        }).on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                console.log(`Port ${PORT} is busy, trying ${PORT + 1}`);
                app.listen(PORT + 1, () => {
                    console.log(`Server running on port ${PORT + 1}`);
                });
            } else {
                console.error('Server error:', err);
            }
        });
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
    });
