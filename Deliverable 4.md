# Deliverable 4

## Local Dev Server Run Instructions

1. `npm install` from the root folder
2. `npm install` inside of **client**
3. Go back to the root folder
4. `npm run dev` to run both the React JS client and Express JS server concurrently

Alternatively, start each service independently. 

## Functionalities

This deliverable focuses primarily around two core functionalities, ***authentication*** and ***community***. As a bonus, a third ***course/topic*** functionality has been implemented partially.

## Functionality 1 - Authentication

A core feature for users of Hello Food is their ability to securely and quickly ***register*** and ***sign in*** to their accounts. When a user logs in, a JWT token is sent from the backend to the client. The token is stored in localStorage and assigned to the default header of every *axios* request (a HTTP request package).

Authentication also means that users who try accessing **/dashboard** who are not logged in are redirected to **/login**. Furthermore, anyone who tries to access a secure API endpoint without a valid token, such as **/api/student/profile** are given a '401' Unauthorized error.

#### URL's:

The relevant URL's can be accessed online at *hello-food.herokuapp.com* or from a local dev server

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

components/

- Navigation
    - Navigation.js
  - Login
    - Login.js
  - Register
    - Register.js
  - Dashboard
    - Dashboard.js

## Functionality 2 - Community

Another core functionality of the Hello Food educational platform is the ability for children to post questions to their class in an attempt to garner a deeper understanding of the topics taught in the curriculum. This fosters a sense of community and is an important part of a modern educational platform.

### URL's:

The relevant URL's can be accessed online at *hello-food.herokuapp.com* or from a local dev server

- **/dashboard** - (after log-in) then click on the 'Community' tab

### Relevant Models:

- models/Thread

### Relevant Controller:

- threadController

### Relevant Views:

- components/Threads//ViewThread//ThreadPost