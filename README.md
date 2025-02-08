# User Management System with React & JSON Server

This project is a User Management System built using React, React Router, JSON Server, Formik, Yup, and Styled Components. It provides full CRUD (Create, Read, Update, Delete) functionality with API communication using async/await fetch requests.

## Features
- Fetch and display users in a table with Edit and Delete options.
- Add a new user through a modal form with validation.
- Edit user details through a dedicated edit page (EditUser.jsx)
- Remove users and update the UI instantly.
- Ensure correct input using Formik and Yup.
- Used for styling to maintain a modular and reusable UI.

## Technologies Used
- React (Functional Components)
- React Router (for navigation & dynamic routing)
- JSON Server (to simulate a backend API)
- Formik & Yup (for form handling & validation)
- Styled Components (for component-based styling)
- Fetch API with async/await (for API communication)

# User Management System with React & JSON Server

This project is a User Management System built using React, React Router, JSON Server, Formik, Yup, and Styled Components. It provides full CRUD (Create, Read, Update, Delete) functionality with API communication.

## Features
- Fetch and display users in a table with Edit and Delete options.
- Add a new user through a modal form with validation.
- Edit user details through a dedicated edit page (/users/:userId/edit).
- Remove users and update the UI instantly.
- Ensure correct input using *Formik* and *Yup*.
- Used for styling to maintain a modular and reusable UI.

## Technologies Used
- React (Functional Components)
- React Router (for navigation & dynamic routing)
- JSON Server (to simulate a backend API)
- Formik & Yup (for form handling & validation)
- Styled Components (for component-based styling)
- Fetch API with async/await (for API communication)

## For instalation
Clone the Repository:
git clone https://github.com/felyRico/User-manage-system/
cd user-manage-system

Install Dependencies:
npm install

Start JSON Server:
npx json-server --watch db.json --port 3001

Start the React App:
npm start

API Endpoints (JSON Server)
Method	Endpoint	Description
GET	/users	Fetch all users
POST	/users	Add a new user
PUT	/users/:id	Update user details
DELETE	/users/:id	Remove a user

# How to use it (for dummies)
View Users: Users are displayed in a table.
Add a User: Click "Add Member" to open the modal, fill in details, and submit.
Edit a User: Click "Edit" to modify user details.
Delete a User: Click "Delete" to remove a user.