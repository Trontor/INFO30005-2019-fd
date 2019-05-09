# Deliverable 4

## Functionalities

This deliverable focuses primarily around two core functionalities, ***authentication*** and ***community***. As a bonus, a third ***course/topic*** functionality has been implemented partially.

## Functionality 1 - Authentication

A core feature for users of Hello Food is their ability to securely and quickly ***register*** and ***sign in*** to their accounts. When a user logs in, a JWT token is sent from the backend to the client. The token is stored in localStorage and assigned to the default header of every *axios* request (a HTTP request package).

Authentication also means that users who try accessing **/dashboard** who are not logged in are redirected to **/login**. Furthermore, anyone who tries to access a secure API endpoint without a valid token, such as **/api/student/profile** are given a '401' Unauthorized error.

The relevant URL's are can be accessed online at *hello-food.herokuapp.com*

- /login - for logging a student into the system
- /register - for registering a student into the system
- /dashboard - redirected to dashboard upon login (Private Route)

### Relevant Models:

- Student
- Thread
- Topics
- Teacher

All of these models are accessed by the ***student*** controller in the function *studentProfile* which is accessed at ***/api/student/profile***

### Relevant Controller:

- studentController

### Relevant Views (React JS Client)

- components/

  - Login
    - Login.js
  - Register
    - Register.js
  - Dashboard
    - Dashboard.js
