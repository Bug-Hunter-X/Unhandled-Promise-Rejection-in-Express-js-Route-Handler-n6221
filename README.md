# Unhandled Promise Rejection in Express.js Route Handler

This repository demonstrates a common error in Node.js Express.js applications: unhandled promise rejections in asynchronous route handlers.  The error is logged to the console, but the response to the client is never sent, leading to hanging requests and poor user experience.

The `bug.js` file contains the erroneous code.  The `bugSolution.js` file provides a corrected version that demonstrates proper error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository directory.
3. Run `npm install express`
4. Run `node bug.js`
5. Open your browser and go to `http://localhost:3000`. You might see a hanging request in your browser's developer tools.
6. Run `node bugSolution.js` to see the corrected version.