# User Routes Documentation

This document describes all API endpoints available in the `UserRoutes` module. It includes route paths, HTTP methods, required data, responses, and status codes.

---

## **1. Register User**

- **Endpoint:** `/api/users/register`
- **Method:** `POST`
- **Description:** Creates a new user account in the system.
- **Request Body:**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password123",
  "phone": "0123456789",
  "address": "123 Main Street"
}
```

- **Response:**

```json
{
  {
  "success": true,
  "statusCode": 201,
  "message": "User Created Successfully",
  "data": {
    "_id": "64d3f1e0f1c4b2a1b2c3d4e5",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "0123456789",
    "address": "123 Main Street",
    "isActive": "ACTIVE",
    "isDeleted": false,
    "isVerified": false,
    "createdAt": "2025-08-16T00:00:00.000Z",
    "updatedAt": "2025-08-16T00:00:00.000Z"
  }
}

}
```

## **2. User Login**

- **Endpoint:** `/api/users/login`
- **Method:** `POST`
- **Description:** Logs in a user and returns an access token.
- **Request Body:**

```json
{
  "email": "johndoe@example.com",
  "password": "password123"
}
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Users Logged In Successfully",
  "data": {
    "accessToken": "jwt_access_token_here",
    "user": {
      "_id": "64d3f1e0f1c4b2a1b2c3d4e5",
      "name": "John Doe",
      "email": "johndoe@example.com",
      "phone": "0123456789",
      "address": "123 Main Street",
      "isActive": "ACTIVE",
      "isDeleted": false,
      "isVerified": false,
      "createdAt": "2025-08-16T00:00:00.000Z",
      "updatedAt": "2025-08-16T00:00:00.000Z"
    }
  }
}
```

## **3. Get Current User (Profile)**

- **Endpoint:** `/api/users/me`
- **Method:** `GET`
- **Description:** Retrieves the currently logged-in user's profile.
- **Headers:**

```python
Authorization: Bearer <accessToken>
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Profile Retrieved Successfully",
  "data": {
    "_id": "64d3f1e0f1c4b2a1b2c3d4e5",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "phone": "0123456789",
    "address": "123 Main Street",
    "isActive": "ACTIVE",
    "isDeleted": false,
    "isVerified": false,
    "createdAt": "2025-08-16T00:00:00.000Z",
    "updatedAt": "2025-08-16T00:00:00.000Z"
  }
}
```

## **4. Logout User**

- **Endpoint:** `/api/users/logout`
- **Method:** `POST`
- **Description:** Logs out the current user and clears the access token cookie.

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Logged Out Successfully",
  "data": null
}
```
