## Installation

To use this API, you'll need to have Node.js and MongoDB installed. Then follow these steps:

````bash
# Clone the repository
git clone <repository-url>

# setup .env file

# Install dependencies
npm install

# Start the development server
npm run dev


# Expense Management API

This API provides endpoints for managing expenses, including creating, retrieving, updating, and deleting expense records.

---

## **1. Register User**

- **Endpoint:** `/api/v1/users/register`
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

- **Endpoint:** `/api/v1/users/login`
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

- **Endpoint:** `/api/v1/users/me`
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

- **Endpoint:** `/api/v1/users/logout`
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

# Expense Management API

This API provides endpoints for managing expenses, including creating, retrieving, updating, and deleting expense records.

---

## **1. Create Expense**

- **Endpoint:** `/api/expenses/create-expense`
- **Method:** `POST`
- **Authentication::** Required.
- **Request Body:**

```json
{
  "title": "Groceries",
  "amount": 150.5,
  "category": "Food",
  "date": "2025-08-16"
}
```

- **Response:**

```json
{
  "success": true,
  "statusCode": 201,
  "message": "Expense created successfully",
  "data": {
    "_id": "64d3f1e0f1c4b2a1b2c3d4e5",
    "title": "Groceries",
    "amount": 150.5,
    "category": "Food",
    "date": "2025-08-16T00:00:00.000Z",
    "createdAt": "2025-08-16T00:00:00.000Z",
    "updatedAt": "2025-08-16T00:00:00.000Z"
  }
}
```

## **2. Get All Expenses**

- **Endpoint:** ` /api/expenses/all-expense`
- **Method:** `GET`
- **Authentication::** Not required.
- **Request Body:**
-
- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Expenses retrieved successfully",
  "meta": {
    "total": 15
  },
  "data": [
    {
      "_id": "64d3f1e0f1c4b2a1b2c3d4e5",
      "title": "Groceries",
      "amount": 150.5,
      "category": "Food",
      "date": "2025-08-16T00:00:00.000Z",
      "createdAt": "2025-08-16T00:00:00.000Z",
      "updatedAt": "2025-08-16T00:00:00.000Z"
    }
  ]
}
```

## **3. Get Single Expense**

- **Endpoint:** `/api/expenses/each-expense/:id`
- **Method:** `GET`
- **Authentication::** Not required.
- **Request Body:**
-
- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Expenses retrieved successfully",
  "data": {
    "_id": "64d3f1e0f1c4b2a1b2c3d4e5",
    "title": "Groceries",
    "amount": 150.5,
    "category": "Food",
    "date": "2025-08-16T00:00:00.000Z",
    "createdAt": "2025-08-16T00:00:00.000Z",
    "updatedAt": "2025-08-16T00:00:00.000Z"
  }
}
```
## **4. Update Expense**

- **Endpoint:** `/api/expenses/update-expense/:id`
- **Method:** `PATCH`
- **Authentication::** Required.
- **Request Body:**

```json
{
  "amount": 175.00
}
```
-
- **Response:**

```json
{
  "title": "Groceries",
  "amount": 150.5,
  "category": "Food",
  "date": "2025-08-16"
}
```

## **5. Delete Expense**

- **Endpoint:** ` /api/expenses/remove-expense/:id`
- **Method:** `DELETE`
- **Authentication::** Required.

- **Response:**

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Expense deleted successfully",
  "data": null
}
```


## Error Handling

The API returns appropriate HTTP status codes and error messages for various scenarios:

| Status Code | Error Type               | Description                                                                 |
|-------------|--------------------------|-----------------------------------------------------------------------------|
| `400`       | Bad Request              | When request validation fails or an expense already exists for the same date |
| `404`       | Not Found                | When no expense exists with the provided ID                                 |
| `401`       | Unauthorized             | When authentication is required but not provided or invalid                 |



