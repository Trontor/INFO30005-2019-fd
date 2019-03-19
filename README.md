# INFO30005-Freedom Dive

## Overview

* Name: Hello Food
* Type: Web based application
* Category: Educational website
* Proposed purpose: A website that helps kids in Melbourne to raise their awareness of the benefits of fresh food.
* Techniques
    * Front-end
    * Backend
    * Database
    * UI design
* Members: Kevin, Miley, Yat, Rohyl

## Research

From:https://www.healthdirect.gov.au/obesity-in-children

https://www.healthykids.nsw.gov.au/stats-research/overweight-and-obesity.aspx

### What are the different types of people suffering and are impacted by this problem?

The Schools Physical Activity and Nutrition Survey found in 2010 that the number of NSW children who were overweight or obese had risen from around one in 10 to one in 4 over a 20 year period. The level of obesity tripled in all age groups – and for both boys and girls – over the same period. One third of children ate confectionary at least three times a week. Over 50% of boys and girls who reported having soft drinks available at home consumed at least two cups a week. (https://www.healthykids.nsw.gov.au/stats-research/). These statistics show a distinctly high rate of poor decisions in regards to health and nutrition, with its effect directly resulting in an increase in overall obesity rates amongst children. 

### Current Solutions

The Australian government is well aware of these issues, and have launched initiatives to educate parents on making smarter decisions towards their children's health. Such solutions are usually in the form of text-heavy information-based websites like https://www.eatforhealth.gov.au/ and https://healthyweight.health.gov.au.  However, there seems to be a lack of focus on increasing kids' awareness of the benefits of fresh food so they can make better choices at an early age. (https://challenges.openideo.com/challenge/how-might-we-give-children-the-knowledge-to-eat-better/)

### Target Demographic

Our project directly targets children, typically those in primary school and early middle school. However, there is a residual target audience of parents and teachers to support their children's development. When it comes to health for children, it takes many to tango - since parents have the purchasing power and the school supports the growth of a child for large portions of their day.

### Build Proposal

We will develop an online platform called 'Hello Food'. This platform will nurture the nutritional and health awareness of children from an early age. The platform will draw a lot of inspiration from MOOC's like Coursera, Udemy and Udacity, while tailoring the educational experience to mimic sites like Khan Academy. Since this platform will primarily be designed for use by children, it must not be too content-heavy and must be very child-friendly. As well as helping children learn how to make better food and health choices, light-hearted inter-class and inter-school competitions will be enabled to allow continued tracking of individual improvement and impact of the platform over time.

Our platform will aim to educate children on health and nutrition. From personal experience in the Australian education system - children are indeed taught this in health classes, but typically as a one-off discussion and with no structured long-term engagement plan in place. We will implement a mixed-media teaching format that is catered to the children's comprehension level. This teaching service will encompass an evaluation and reward system to track student's progress over time. The content will focus on healthy and unhealthy food choices and its effects on personal wellbeing, as well as suggested physical health topics. Evaluation will be conducted through a combination of quizzes and short games.

Finally, to enable parent and teacher cooperation - a student management and enablement system will be implemented. Learning sections can be unlocked on a rolling basis by teacher accounts over a custom time period to enforce an learning pace for all students. Furthermore, children can track their healthy food consumption over the week, and request approval from their parent/teacher. A leaderboard system based on the healthy food consumption of the children will be available to teachers, so they can reward or congratulate the healthiest students at the end of the week. This is a form of positive reinforcement, and a method to motivate others in the class to make healthier choices. 

### Viability of the Solution

In recent years, nearly all schools in Australia have begun incorporating some sort of online platform to assist and evaluate student's curriculum learning. 

### For example, students in **Queensland** may use the following websites:

Literacy - *Word Flyers* - wordflyers.com.au
Language - *Language Perfect* - educationperfect.com/subjects/languages
Numeracy - *MathSpace* - mathspace.co/au
Science - *Stile* - stileeducation.com
Health - *None*

Students in **Victoria** may use the following websites:

<<TODO>>

'Hello Food' aims to be a platform that is tailored to the health and physical education of students and should supplement a state curriculum like the other shown established platforms.

### Tech Implementation

The responsibility for each part of the full stack is delegated to each member of the group:

**Miley and Yat** - Frontend Design
Design - Axure RP 8
Implementation - HTML and CSS

**Rohyl** - Front-End Interaction with Backend
React JS (with Redux and React Router)
Node + Express + Passport JS

**Kevin Xu** - Backend and Database Design
MongoDB
Node + Express 

## Basic design

### User

#### Account

Upon registration, several fields (email, display name, password, confirm password) are mandatory, while other fields (avatar, bio, age, school etc.) are optional. All profile information, except display name which can only be set once during registration, can be customised in [profile](#Profile) page if user wish to do so after registration.

#### User profile

There are several fields metioned previously in [Account](#Account) section. Extra user profile details will be stored in database. These are listed below:

* Role, integer value, either one of
    * 0 - Platform Manager: complete access control
    * 1 - Community Manager: Role 2, **plus** the ability to approve the request to create a community and manage communities
    * 2 - Parent Account: Role 3, **plus** the ability to manage and control their children's account
    * 3 - Kid Account: Normal user
* [Stars](#Stars), integer value
* Bio, string value, up to 50 characters
* Creation Timestamp

A normal user entity fetched from database will have a document in the following format

```JSON
{
    "role": 3,
    "stars": 0,
    "bio": "(some bio added by the user, can be empty)",
    "time": "(creation time)",
    "lock": false,
    "remove": "calculate the day that the user wants to totally remove their account"
}
```

#### Stars

Stars will be introduced as the scoring, or reputation system. Kids earn stars to level up, and stars can be used in many ways.

* How to obtain stars:
    * Play games, e.g. lucky spin, fresh food identification
    * Join community and make contributions
    * Participate in events
    * Watch and learn
* Circumstances under which a user can lose star:
    * Reported by others for misbehaviour
    * Faulty report
* How to use stars:
    * Leaderboard for Star available
    * Enjoy some benefits of discount when making purchases  on website

#### Avatar

Default avatars are available but kids can choose their own avatars.

### Operations

* Sign-up / Sign-in / Sign-out
* Donate
* Delete account

### Profile

User panel includes the following fields.

* Profile
    * Avatar
    * Username
    * Bio
* Status
    * Stars
    * Account age
* Activity
    * Events
    * Posts

## Sections

### Events

The events panel is designed for kids to **participate in social/entertaining events related to fresh food**. Some examples are as follows:

* Farmers Market: Notifications of farmers market events in Melbourne. 

* Picnics: Picnic hosted by the school so students can come up with creative but healthy dishes to inspire others and show that healthy eating does't necessarily mean not-tasty. 

Successful participation in events may award kids with stars.

### Games

A gaming section will greatly motivate kids to learn. For the purpose of project, two games can be introduced.

#### Lucky spin

Kids are able to spin only once a day. The spinner has a variety of healthy and unhealthy food in it. After the spin, a result of fresh food earns kids varying degree of stars. There will be a study card for each spin result. This is a small feature that incorporates a small luck factor in star-gathering, but is capped so students don't develop a gambling habit. By rewarding students for landing on healthy food, a subconscious connection is made,  associating 'healthy foods' with 'good!'.

#### Quiz Examples

* Given picture of fresh food, kids choose name of the food.
* Evaluate current eating habits of children, and suggest changes in a positive manner
* Fresh food relating to other aspects. e.g. How much running needed to consume a piece of pizza.

### Education/Classroom

In the classroom section, texts to teach kids to **form a good eating habit and a better understanding of food** will be included. Specifically,

* Online studying: There are online videos and workshops to extend kids' knowledge of green food and learn with fun.
* Habit forming: eat xxx how many times a week
* Introduction of different types of fresh food and benefits.
* Wrong food to eat and what harm it does.

Can be done in video or paragraph format. Quiz might come right after watching a video. Stars will be awarded for completing different readings.

### Community

The web application will be **community-based** to allow more interaction.

* Add friends, complete challenge together
* Share ideas on fresh food benefits.
* Weekly challenge: Each week a kid's diet is evaluated based on fresh food consumption and the range of food he/she eats. Parents verify what the kids eat and approve of their "consumption request". At the end of each week, a leaderboard will show top 3 kids in terms of fresh food consumption and range. 

### Others

Some useful links to be used later:

* Lucky spin: https://codepen.io/realdreamer/pen/Jnwui
* Health standard: https://www.betterhealth.vic.gov.au/health/healthyliving/food-variety-and-a-healthy-diet

* Yat Yeung