# MongoDB Connection Troubleshooting Guide

## Common Issues and Solutions

### 1. Connection String Issues

**Problem:** Connection string has quotes or incorrect format
**Solution:** Make sure your `.env` file has:
```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/dbname?retryWrites=true&w=majority
```
- No quotes around the connection string
- Replace `username`, `password`, `cluster`, and `dbname` with your actual values

### 2. MongoDB Atlas IP Whitelist

**Problem:** "MongoServerSelectionError" or "IP not whitelisted"
**Solution:**
1. Go to MongoDB Atlas Dashboard
2. Click "Network Access" in the left sidebar
3. Click "Add IP Address"
4. Click "Allow Access from Anywhere" (for development) or add your specific IP
5. Wait a few minutes for changes to take effect

### 3. Authentication Failed

**Problem:** "Authentication failed" error
**Solution:**
1. Verify your username and password in the connection string
2. Make sure special characters in password are URL-encoded:
   - `@` becomes `%40`
   - `#` becomes `%23`
   - `%` becomes `%25`
   - etc.
3. Check if your database user has proper permissions

### 4. Network Timeout

**Problem:** Connection times out
**Solution:**
1. Check your internet connection
2. Verify MongoDB Atlas cluster is running (not paused)
3. Check firewall settings
4. Try using a different network

### 5. Local MongoDB Setup

If you want to use local MongoDB instead of Atlas:

1. Install MongoDB Community Edition
2. Start MongoDB service
3. Update `.env`:
```
MONGO_URI=mongodb://localhost:27017/perfume-db
```

### Testing Connection

1. Make sure `.env` file exists in the `backend` directory
2. Run: `npm start`
3. You should see: `✅ MongoDB Connected Successfully`

### Quick Fixes

**If connection still fails:**
1. Double-check your `.env` file format (no quotes, no spaces)
2. Verify MongoDB Atlas cluster is not paused
3. Check MongoDB Atlas dashboard for any alerts
4. Try regenerating your connection string from MongoDB Atlas
5. Make sure you're using the correct database name

