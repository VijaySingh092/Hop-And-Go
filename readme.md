# Hop-Go 🚗

Hop-Go is a full-stack ride-booking web application inspired by modern ride-hailing platforms. It provides separate experiences for **users** and **captains (drivers)**, allowing users to enter pickup and destination locations, select a vehicle, request rides, and manage the ride flow.

## 🚀 Features

### 👤 User

* User registration and login
* JWT-based authentication
* Secure cookie/token-based session handling
* Enter pickup and destination locations
* Location search and coordinate-based location handling
* Select a vehicle type
* View estimated ride fare
* Confirm and request a ride
* Ride status flow
* Responsive ride-booking interface

### 🚕 Captain

* Captain registration and login
* Vehicle details during registration
* Vehicle types:

  * Car
  * Motorcycle
  * Auto
* Captain profile
* Active/inactive captain status
* Receive ride requests
* Accept and manage rides
* Captain riding interface
* Ride completion flow

### ⚡ Application

* Separate user and captain authentication flows
* REST API architecture
* MongoDB database
* Protected API routes
* Responsive React UI
* GSAP-based UI animations
* Location and coordinate handling
* Modular backend architecture using controllers, models, routes, services, and middleware

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* React Router
* Tailwind CSS
* GSAP
* Remix Icon
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT
* Cookie Parser
* CORS
* Axios

### Development Tools

* Git & GitHub
* VS Code
* Postman
* MongoDB / MongoDB Atlas

---

## 📁 Project Structure

```text
Hop-Go/
│
├── Backend/
│   ├── controllers/
│   ├── db/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.js
│   └── server.js
│
├── Frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
└── README.md
```

> The exact folder structure may change as the project continues to evolve.

---

## 🔐 Authentication

Hop-Go uses **JWT-based authentication** to protect user and captain routes.

The authentication flow is:

```text
Register
   ↓
Login
   ↓
JWT Token
   ↓
Authentication Middleware
   ↓
Protected Route
   ↓
User/Captain Profile
```

Depending on the client-side flow, authentication can be handled using:

* HTTP cookies
* Authorization headers
* Bearer tokens

Example:

```text
Authorization: Bearer <token>
```

---

## 📍 Location Handling

Hop-Go uses location data to convert searched addresses into geographical coordinates such as:

```text
Latitude
Longitude
```

These coordinates can be used for ride-related operations such as:

* Identifying pickup locations
* Identifying destination locations
* Calculating distances
* Supporting future route and map functionality

The application can integrate with a geocoding/maps provider through environment variables instead of hard-coding API credentials.

---

## 🚘 Ride Flow

### User Flow

```text
User Login
    ↓
Enter Pickup Location
    ↓
Enter Destination
    ↓
Select Vehicle
    ↓
Confirm Ride
    ↓
Request Ride
    ↓
Captain Accepts Ride
    ↓
Ride Starts
    ↓
Ride Completes
```

### Captain Flow

```text
Captain Login
    ↓
Captain Goes Online
    ↓
Receive Ride Request
    ↓
Accept Ride
    ↓
Start Ride
    ↓
Complete Ride
```

---

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone <your-repository-url>
```

Navigate into the project:

```bash
cd Hop-Go
```

### 2. Install Backend Dependencies

```bash
cd Backend
npm install
```

### 3. Install Frontend Dependencies

Open another terminal and run:

```bash
cd Frontend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file inside the `Backend` directory.

Example:

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

MAPS_API_KEY=your_maps_api_key
```

For the frontend, create a `.env` file if required:

```env
VITE_BASE_URL=http://localhost:4000
```

> **Important:** Never commit `.env` files or API keys to GitHub.

Add your environment files to `.gitignore`:

```gitignore
.env
.env.*
node_modules
```

---

## ▶️ Running the Project

### Start the Backend

Navigate to the backend directory:

```bash
cd Backend
```

Run the development server:

```bash
npm run dev
```

The backend runs locally on:

```text
http://localhost:4000
```

### Start the Frontend

Open another terminal:

```bash
cd Frontend
```

Start the Vite development server:

```bash
npm run dev
```

The frontend will usually be available at:

```text
http://localhost:5173
```

---

## 🔌 API Structure

The backend follows a RESTful API architecture.

### User Endpoints

| Method | Endpoint          | Description         |
| ------ | ----------------- | ------------------- |
| POST   | `/users/register` | Register a new user |
| POST   | `/users/login`    | Login user          |
| GET    | `/users/profile`  | Get user profile    |
| GET    | `/users/logout`   | Logout user         |

### Captain Endpoints

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/captains/register` | Register a captain  |
| POST   | `/captains/login`    | Login captain       |
| GET    | `/captains/profile`  | Get captain profile |
| GET    | `/captains/logout`   | Logout captain      |

> Ride-related endpoints may vary as the ride functionality continues to be developed.

---

## 🧩 Main React Components

The frontend uses reusable React components to build the ride-booking interface.

Some of the main components include:

* `LocationSearchPanel`
* `VehiclePanel`
* `ConfirmRide`

The application also uses **React Context** to share authentication and application state between components.

---

## 🎨 UI & Animation

Hop-Go uses **Tailwind CSS** for responsive styling and **GSAP** for UI animations.

GSAP is used to create smooth transitions for interfaces such as:

* Location search
* Vehicle selection
* Ride confirmation
* Ride-related panels

The goal is to provide a smooth and responsive ride-booking experience across different screen sizes.

---

## 🧪 API Testing

Backend APIs can be tested using **Postman**.

A typical authentication testing flow is:

```text
Register
   ↓
Login
   ↓
Get Profile
   ↓
Test Protected Routes
   ↓
Logout
```

For protected endpoints, provide the JWT token using the authentication method expected by the API.

---

## 🔒 Security

The project implements several basic security practices:

* Password hashing
* JWT authentication
* Protected routes
* Authentication middleware
* HTTP-only cookie support where configured
* Environment variables for secrets
* Input validation

For production deployment, additional security measures can be considered, including:

* Rate limiting
* Strict CORS configuration
* HTTPS
* Security headers
* Stronger input validation
* Request sanitization

---

## 📌 Future Improvements

Planned improvements include:

* Real-time ride tracking
* WebSocket/Socket.IO-based ride updates
* Live captain location tracking
* Route visualization
* Improved fare calculation
* Ride history
* Ratings and reviews
* Online payments
* Push notifications
* Driver availability matching
* Production-grade maps integration
* Frontend and backend deployment
* Improved ride matching algorithms

---

## 🎯 Learning Objectives

This project demonstrates practical implementation of:

* MERN stack development
* REST API development
* React component architecture
* React Router
* Authentication and authorization
* JWT
* MongoDB and Mongoose
* Express middleware
* API integration
* Geocoding
* Latitude and longitude handling
* Responsive UI development
* GSAP animations
* Full-stack application architecture
* Client-server communication

---

## 👨‍💻 Author

**Vijay Singh Khetwal**

* GitHub: [VijaySingh092](https://github.com/VijaySingh092)

---

## ⭐ Support

If you find this project useful for learning or development, consider giving the repository a ⭐ on GitHub.

---

## 🚧 Project Status

**Currently in Development**

Hop-Go is actively being built, with new features and improvements being added as development progresses.
