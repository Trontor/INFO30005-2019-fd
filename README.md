# INFO30005-Freedom Dive

## Overview

- Name: **Hello Food**
- Type: Web based application
- Category: Educational website
- Proposed purpose: A website that helps kids in Australia to raise their awareness of the benefits of fresh food.
- Members: Kevin, Miley, Yat, Rohyl

## Functionality Description
NOTE: 3 student logins + the teacher login can be easily accessed using the dev panel [here](https://hello-food.herokuapp.com/login/dev)
### Homepage, Login and Sign-up
* The homepage allows users to understand the purpose and goals of our educational website. The Login and Sign-up pages allow both 
teachers and students to have access to the dashboard. 
* Relevant URLs
    * https://hello-food.herokuapp.com
    * https://hello-food.herokuapp.com/login
    * https://hello-food.herokuapp.com/register
    * Note: Toggle "I am a teacher" in login goes to teacher dashboard. Default login details on 
    website are for student login. Teacher login details: 
        * Email: johnsmith@email.com
        * Password: secure123
* Routes
    * routes/api/student
    * routes/api/teacher
* Controllers
    * controllers/studentController
    * controllers/teacherController
* Models
    * Student.js
    * Teacher.js
    
### Dashboard
#### Education
* Our primary goal is to increase the amount of knowledge students have on the basics of health and fitness. To achieve 
this, we have integrated an education system into our platform. Through Articles, Videos and Quizzes, the students are 
exposed to a variety of media and assessed on how much they have learned. The education system is the most important 
functionality, the following functionalities serve to supplement this system.
* Relevant URLs
    * https://hello-food.herokuapp.com/dashboard (Topics tab)
* Routes
    * routes/api/quiz
    * routes/api/videos
    * routes/api/articles
* Controllers
    * controllers/articleController
    * controllers/quizController
    * controllers/videoController
* Models
    * Article.js
    * Quiz.js
    * Video.js
    * Topic.js

#### Star system
* One of the core features of our system architecture is the ability for students to be rewarded for their effort.
This establishes a positive feedback loop so that the students are incentivised to complete topics. For example, 
teachers can reward the top 3 students with the most stars at the end of the week with a present.
* Relevant URLs
    * https://hello-food.herokuapp.com/dashboard (Profile and Leaderboard Tab)
* Routes
    * routes/api/student (get info)
    * routes/api/teacher (get leaderboard and display)
* Controllers
    * controllers/studentController
    * controllers/teacherController
* Models
    * Student.js
    * Teacher.js
    
#### Community System
* The community sub-system enables teachers and students to engage in a collaborative peer-learning space 
where students can request clarification on topics and share their own research. This system facilitates further 
discussion in health and fitness, allowing students to gain a deeper understanding of the topics taught.
* Relevant URLs
    * https://hello-food.herokuapp.com/dashboard (Community Tab)
* Routes
    * routes/api/thread
* Controllers
    * controllers/threadController
* Models
    * Thread.js
    
#### Teacher Management
* Teachers are able to observe students' learning progress. They 
can also modify threads and reset students' progress.
* Relevant URLs
    * https://hello-food.herokuapp.com/dashboard (Toggle "I am a teacher")
    * All 3 tabs have teacher management content. Statistics tab shows the 
    statistics of students' progress.
* Routes
    * routes/api/thread (Delete thread)
    * routes/api/teacher
* Controllers
    * controllers/teacherController
    * controllers/threadController
* Models
    * Thread.js
    * Teacher.js
