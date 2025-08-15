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