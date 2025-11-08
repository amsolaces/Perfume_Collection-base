# Perfume Backend API

A Node.js/Express backend API for the Perfume Collection application.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# MongoDB Connection String
MONGO_URI=mongodb://localhost:27017/perfume-db

# JWT Secret Key for token generation
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production

# Server Port (optional, defaults to 5000)
PORT=5000
```

**For MongoDB Atlas (Cloud):**
- Replace `MONGO_URI` with your MongoDB Atlas connection string
- Format: `mongodb+srv://username:password@cluster.mongodb.net/perfume-db`

**For Local MongoDB:**
- Make sure MongoDB is installed and running on your machine
- Default connection: `mongodb://localhost:27017/perfume-db`

### 3. Start MongoDB

**If using local MongoDB:**
- Make sure MongoDB service is running
- On Windows: MongoDB should start automatically if installed as a service
- On Mac/Linux: `sudo systemctl start mongod` or `brew services start mongodb-community`

### 4. Seed the Database (Optional)

To add sample perfume data:

```bash
npm run seed
```

This will add 6 sample perfumes to your database.

### 5. Start the Server

```bash
npm start
```

The server will run on `http://localhost:5000`

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
  - Body: `{ "name": "John Doe", "email": "john@example.com", "password": "password123" }`

- `POST /api/auth/login` - Login user
  - Body: `{ "email": "john@example.com", "password": "password123" }`

### Perfumes

- `GET /api/perfumes` - Get all perfumes (public)
- `POST /api/perfumes` - Add a new perfume (requires authentication)
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ "name": "Perfume Name", "brand": "Brand Name", "price": 2999, "description": "Description", "imageUrl": "url" }`

## Project Structure

```
backend/
├── config/
│   └── db.js              # Database connection
├── controllers/
│   ├── authController.js  # Authentication logic
│   └── perfumeController.js # Perfume CRUD operations
├── middleware/
│   └── authMiddleware.js  # JWT authentication middleware
├── models/
│   ├── Perfume.js        # Perfume schema
│   └── User.js           # User schema
├── routes/
│   ├── authRoutes.js     # Auth routes
│   └── perfumeRoutes.js  # Perfume routes
├── scripts/
│   └── seed.js          # Database seeding script
├── utils/
│   └── generateToken.js # JWT token generation
├── server.js            # Main server file
└── .env                 # Environment variables (create this)
```

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running
- Check your `MONGO_URI` in `.env` file
- Verify network connectivity if using MongoDB Atlas

### Port Already in Use
- Change `PORT` in `.env` file
- Or stop the process using port 5000

### JWT Secret Error
- Make sure `JWT_SECRET` is set in `.env` file
- Use a strong random string for production



<img width="1899" height="964" alt="image" src="https://github.com/user-attachments/assets/473d3f5b-6e6f-445f-aa27-fa06a11e13e7" />
(dashboard)


