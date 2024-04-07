# Server Modular

This is a modular server built with Node.js, Express, and Nodemon. It follows a modular architecture pattern, separating routes and controllers for better code organization and maintainability.

## Getting Started

To get started with the server, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd 2-server-modular`
3. Install the dependencies: `npm install`
4. Start the server: `npm start`

## Project Structure

The project structure is as follows:

```
2-server-modular
├── src
│   ├── app.js
│   ├── routes
│   │   └── index.js
│   └── controllers
│       └── index.js
├── package.json
└── README.md
```

- `src/app.js`: The entry point of the server. It sets up the Express server and imports the routes.
- `src/routes/index.js`: Defines the routes for the server. It exports a function that takes the Express app as a parameter and sets up the routes.
- `src/controllers/index.js`: Contains the controller functions for each route. It exports an object with functions that handle the logic for each route.
- `package.json`: Contains the project's dependencies and scripts.
- `README.md`: This file, which provides documentation for the server.

## Available Routes

The server exposes the following routes:

- `/`: GET request that returns a welcome message.
- `/users`: GET request that returns a list of users.
- `/users/:id`: GET request that returns the details of a specific user.

## Contributing

Contributions are welcome! If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).