# Node REST API (TypeScript)

![Node.js](https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![License](https://img.shields.io/badge/License-ISC-blue.svg?style=for-the-badge)

A robust, enterprise-grade RESTful API boilerplate built with **Node.js**, **Express**, **MongoDB**, and **TypeScript**. This project features secure authentication, data validation, structured logging, and production-ready best practices.

## 🚀 Features

-   **Type Safety:** Full TypeScript support for better tooling and fewer runtime errors.
-   **Authentication:** Secure JWT-based authentication (sign up, login) with Argon2 hashing.
-   **Database:** MongoDB integration using Mongoose with schema validation.
-   **Security:** Implemented Helmet, CORS, and Rate Limiting for enhanced security.
-   **Validation:** Request data validation using Joi.
-   **Logging:** HTTP request logging with Morgan.
-   **Structure:** Scalable MVC (Model-View-Controller) architecture.

## 📋 Table of Contents

-   [Prerequisites](#-prerequisites)
-   [Installation](#-installation)
-   [Configuration](#-configuration)
-   [Running the Project](#-running-the-project)
-   [API Endpoints](#-api-endpoints)
-   [Project Structure](#-project-structure)
-   [Contributing](#-contributing)
-   [License](#-license)

## 🛠 Prerequisites

Before you begin, ensure you have the following installed:

-   [Node.js](https://nodejs.org/) (v14 or higher)
-   [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
-   [MongoDB](https://www.mongodb.com/) (Local instance or Atlas cluster)

## 📦 Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/codewithayana/node_rest-api-ts.git
    cd node_rest-api-ts
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

## ⚙ Configuration

1.  Create a `.env` file in the root directory.
2.  Add the following environment variables:

    ```env
    # Server Configuration
    PORT=3000
    NODE_ENV=development

    # Database Configuration
    MONGO_URI=mongodb://localhost:27017/your_database_name
    DATABASE=node_rest_api_db

    # Security
    JWT_SECRET=your_super_secret_jwt_key
    ```

## 🏃 Running the Project

### Development Mode
Runs the server with hot-reloading using `tsx`.

```bash
npm run dev
```

### Production Build
Compiles TypeScript to JavaScript in the `dist` folder.

```bash
npm run build
```

### Start Production Server
Runs the compiled functionality from `dist`.

```bash
npm start
```

### Linting & Formatting
Check for code issues and format code.

```bash
npm run lint
npm run format
```

## 📡 API Endpoints

### Authentication
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/register` | Register a new user |
| `POST` | `/api/login` | Login and get a JWT token |

### Products
| Method | Endpoint | Description | Access |
| :--- | :--- | :--- | :--- |
| `GET` | `/api/products` | Get all products | User |
| `POST` | `/api/products` | Create a new product | Admin |
| `PATCH` | `/api/products/:id` | Update a product | Admin |
| `DELETE` | `/api/products/:id` | Delete a product | Admin |

### Users
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/users` | Get all users (example) |

### Students
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/students` | Student resources |

## 📂 Project Structure

```
node_rest-api-ts/
├── src/
│   ├── config/         # Database and app configuration
│   ├── controllers/    # Route logic
│   ├── interfaces/     # TypeScript interfaces/types
│   ├── middleware/     # Custom middleware (auth, validation, etc.)
│   ├── models/         # Mongoose models
│   ├── routes/         # Express route definitions
│   ├── validation/     # Joi validation schemas
│   └── server.ts       # App entry point
├── dist/               # Compiled JavaScript (after build)
├── .env                # Environment variables
└── package.json        # Project dependencies and scripts
```

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License

This project is licensed under the **ISC License**.