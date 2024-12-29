
# Train Ticket Booking System

A full-stack application for booking train tickets with seat allocation logic. Built using Next.js, Node.js, and PostgreSQL.

## 🌐 Live Demo
- **Frontend**: [Train Ticket Booking Frontend](https://train-booking-lyart.vercel.app)
- **Backend**: [Train Ticket Booking Backend](https://train-booking-backend-pvpp.onrender.com)

## 🛠️ Tech Stack
- **Frontend**: Next.js / React.js
- **Backend**: Node.js / Express.js
- **Database**: PostgreSQL
- **Styling**: Tailwind CSS
- **Authentication**: JSON Web Tokens (JWT)

---

## ✨ Features
- **User Authentication**: Register and login functionality.
- **Smart Seat Booking**: Optimized seat allocation with priority for same-row booking.
- **Booking Constraints**: Maximum of 7 seats per booking.
- **Special Handling**: Efficient allocation for the last row with 3 seats.
- **Reset Functionality**: Clear all bookings with a single action.

---

## 🚀 Setup Instructions

### Prerequisites
- **Node.js** (v14 or higher)
- **PostgreSQL**
- **npm** or **yarn**

### Frontend Setup
1. Navigate to the client directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5001
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup
1. Navigate to the server directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file:
   ```env
   DATABASE_URL=your_postgresql_url
   JWT_SECRET=your_jwt_secret
   PORT=5001
   ```
4. Initialize the database:
   ```bash
   node init-db.js
   ```
5. Start the development server:
   ```bash
   npm run dev
   ```

---

## 📚 API Documentation

### Authentication Endpoints
- **POST /api/auth/register**  
  Request body:
  ```json
  {
    "name": "string",
    "email": "string",
    "password": "string"
  }
  ```
- **POST /api/auth/login**  
  Request body:
  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

### Booking Endpoints
- **GET /api/booking/seats**  
  Returns all seats with their booking status.
  
- **POST /api/booking/book**  
  Request body:
  ```json
  {
    "seatIds": [1, 2, 3]
  }
  ```

- **POST /api/booking/reset**  
  Resets all seats to available status.

---

## 🔒 Environment Variables

### Frontend (`.env.local`)
```env
NEXT_PUBLIC_API_URL=backend_url
```

### Backend (`.env`)
```env
DATABASE_URL=postgresql_url
JWT_SECRET=your_secret
PORT=5001
```

---

## 🔐 Security Features
- JWT-based authentication.
- Password hashing with bcrypt.
- Input validation using middleware.
- Protection against SQL injection.
- CORS configuration for secure API access.

---

## 🧪 Error Handling
- **Input Validation Errors**: Detailed messages for invalid inputs.
- **Authentication Errors**: Secure handling of login and registration issues.
- **Database Errors**: Proper error messages for database operations.
- **Seat Booking Conflicts**: Prevents double booking or invalid seat requests.
