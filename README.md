# INFO30005-Freedom Dive

## Overview

* Name: Fresh Food R Us
* Type: Web based application
* Category: Educational website
* Proposed purpose: A website that helps kids in Melbourne to have a better (easier/simplr) access to fresh food and gain a deeper understanding of fresh food.
* Techniques
    * Front-end
    * Backend
    * Database
    * UI design
* Members: Rohyl, Kevin, Miley, Yat

## Rough design

### User

#### Account

Upon registration, several fields (email, display name, password, confirm password) are mandatory, while other fields (avatar, bio, age, school etc.) are optional. All profile information, except display name which can only be set once during registration, can be customised in [profile](#Profile) page if user wish to do so after registration.

#### User profile

There are several fields metioned previously in [Account](#Account) section. Extra user profile details will be stored in database. These are listed below:

* Role, integer value, either one of
    * 0 - Platform Manager: complete access control
    * 1 - Community Manager: Role 2, **plus** the ability to approve the request to create a community and manage communities
    * 2 - User Manager: Role 3, **plus** the ability to deal with report against a post and lock the account making such post if necessary
    * 3 - Normal User
* [Stars](#Star), integer value
* Bio, string value, up to 160 characters
* Creation Timestamp
* [Lock](#Ban), boolean value

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

#### Report

A report button to be used for reporting inappropriate behaviours.

#### Stars

Stars will be introduced as the scoring, or reputation system. Kids earn stars to level up, and stars can be used in many ways.

* How to obtain stars:
    * Play games, e.g. lucky spin, fresh food identification
    * Join community and make contributions
    * Participate in events
    * Watch and learn
* Circumstances under which a user can lose star:
    * Reported by others for misbehaviour
    * False report
* How to use stars:
    * Leaderboard for Star available
    * Enjoy some benefits of discount when purchasing lectures/events on website

#### Avatar

Default avatars are available but kids can choose their own avatars.

### Operations

* Sign-out
* Donate
* Delete account

### Profile

Profile Page includes following fields

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

The events panel is designed for kids to **organise and participate in entertaining events related to fresh food**. Some examples are as follows:

* Online studying: There are online lectures and workshops to extend kids' knowledge of green food and learn with fun.
* Framers Market: Notifications of farmers market events in Melbourne. Kids can organise their own if they wish.
* Picnic day: Organised by the website organisers to take kids to farms and pick'n'learn different fruits and vegetables. Charge at a relatively low fee.

Successful participation in events earn kids Stars.

### Games

A gaming section will greatly motivate kids to learn. For the purpose of project, two games can be introduced.

#### Lucky spin

Details to be added later

#### Quiz

* Given picture of fresh food, kids choose name of the food, or vise versa.
* Kids fill out their eating habits, and according to it, estimate their life condition and provide valuable feedback.

### Education/Classroom

In the Classroom section, texts to teach kids to **form a good eating habit and a better understanding of food** will be included. Specifically,

* Habit forming: eat xxx how many times a week
* Introduction of different types of fresh food and benefits.
* Wrong food to eat and what harm it does.

Can be done in video or paragraph format (not sure about comic, maybe copy from some websites?)
Stars will be awarded for completing different readings.

### Community

The web application will be **community-based** to allow more interaction.

* Add friends, complete challenge together
* Share ideas on fresh food benefits.

### Others

Some useful links to be used later:

* Lucky spin: https://codepen.io/realdreamer/pen/Jnwui
* Health standard: https://www.betterhealth.vic.gov.au/health/healthyliving/food-variety-and-a-healthy-diet
