# HNG Stage 0 - Dynamic Profile Endpoint

This is a simple backend server built with Node.js and Express for the HNG Internship. It provides a single API endpoint `GET /me` that returns a static user profile along with a dynamic, live-fetched cat fact from an external API.

## Features

* **GET /me Endpoint**: Returns a JSON object with user data, a current timestamp, and a cat fact.
* **Dynamic Data**: Fetches a new cat fact from the `catfact.ninja` API on every request.
* **Error Handling**: Gracefully handles failures from the external API by returning a fallback message.
* **CORS Enabled**: Configured to allow requests from any origin.
* **Environment-Ready**: Uses environment variables for configuration.

---

## 1. Setup and Installation

Follow these steps to get the project running on your local machine.

1.  **Clone the Repository**:
    ```bash
    git clone https://github.com/chiefEbube/stage-zero.git
    ```

2.  **Navigate to the Project Directory**:
    ```bash
    cd stage-zero
    ```

3.  **Install Dependencies**:
    This project uses `npm` to manage packages.
    ```bash
    npm install
    ```

---

## 2. Environment Variables

This project uses environment variables to store your personal data. This keeps sensitive information out of the main codebase.

1.  Create a new file named `.env` in the root of the project.
2.  Copy the contents of the block below and paste them into your new `.env` file.
3.  Fill in the values with your personal information.

````

PORT=3000

EMAIL="your-email"
NAME="your-full-name"
STACK="your-tech-stack"

````
---

## 3. Running the Application Locally

Once you have installed the dependencies and set up your `.env` file, you can start the server with:

```bash
npm start
````

`Server is running on http://localhost:3000`

-----

## 4\. API Endpoint

### `GET /me`

Returns a JSON object with your profile information, the current UTC timestamp, and a random cat fact.

  * **URL**: `http://localhost:3000/me`
  * **Method**: `GET`

#### Success Response (200 OK)

This is the response you'll get when both the server and the external Cat Facts API are working.

```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Your tech stack"
  },
  "timestamp": "2025-10-19T01:30:45.123Z",
  "fact": "A cat can jump up to five times its own height in a single bound."
}
```

#### Graceful Failure Response (200 OK)

If the external Cat Facts API fails or times out, the server will still return a `200 OK` status with a fallback message in the `fact` field.

```json
{
  "status": "success",
  "user": {
    "email": "your.email@example.com",
    "name": "Your Full Name",
    "stack": "Node.js/Express"
  },
  "timestamp": "2025-10-19T01:32:10.456Z",
  "fact": "Could not retrieve a cat fact at this time."
}
```

-----

## 5\. List of Dependencies

This project relies on the following `npm` packages:

  * **[express](https://www.npmjs.com/package/express)**: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
  * **[axios](https://www.npmjs.com/package/axios)**: A promise-based HTTP client for the browser and Node.js. Used here to fetch data from the Cat Facts API.
  * **[cors](https://www.npmjs.com/package/cors)**: A Node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
  * **[dotenv](https://www.npmjs.com/package/dotenv)**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`.
