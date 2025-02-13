# School Attendance Management System

This is a simple attendance management system which uses HTML and JavaScript for frontend and a backend using Spring Boot.

## Features

- User authentication (Login and Logout)
- JWT-based authentication
- Session management using localStorage

## Technologies Used

- **Frontend:** HTML, JavaScript
- **Backend:** Java, Spring Boot, Spring Security
- **Authentication:** JWT (JSON Web Token)

## Project Structure

```
attendance-system
│── server/
│   ├── attendance-system-server
│── client/
│   ├── login.html
│   ├── home.html
│   ├── login.js
│   ├── home.js
│   ├── loginService.js
|── docs/
│── ReadMe.md
```

## Setup Instructions

### Clone the Repository

```sh
git clone https://github.com/Dilushan06/Attendance-System.git
cd attendance-system
```

### Backend Setup

1. Requirements
   Java 17
   Maven
   IntelliJ IDEA (or any Java IDE)
2. Build and run the Spring Boot application:

   Directly open the attendance-system-server folder in the IntelliJ IDEA or you can run from command line

   ```sh
   cd server
   cd attendance-system-server
   mvn spring-boot:run
   ```

3. The backend server will start at `http://localhost:8080`

### Frontend Setup

1. Requirements
   VS Code Live Server(recommended) / Simple python server or any server to serve the frontend

2. Open `client/login.html` using Live server or any server

3. Ensure the backend is running to allow login requests.

## Default Login Credentials

| Username | Password    |
| -------- | ----------- |
| admin    | password123 |

## Running the Application

1. Start the backend.
2. serve `client/login.html` file in a browser.
3. Use the default login credentials to login in.
4. You should be redirected to `home.html` upon successful login.

## Logout

- Clicking the **Logout** button will clear session data and redirect to `login.html`.

## Troubleshooting

- If login fails, check if the backend is running.
- Open the browser console to check for errors.
- Ensure that the API endpoint `http://localhost:8080/api/login` is reachable.

## Thank You
