# Progressive Web Application: Budget Tracker [![MIT license](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://lbesson.mit-license.org/)


## Table of Contents
1. [ Description ](#desc)
2. [ Task ](#task)
3. [ Link to Heroku deployment ](#link)
4. [ Structure ](#structure)
5. [ Finished product ](#final)


## 1. Description<a name="desc"></a>
This is a full-stack progressive web application for tracking expenses and earnings and allows offlines functionality . It allows to add and visualize transactions, and view the overall budget. Developed using MongoDB for backend and JS for frontend. The application is deployed to Heroku using MongoDB Atlas. 

## 2. Task<a name="task"></a>
Task is to build a workout tracker that allows user to view, create and track daily workouts.
The app contains three main routes: GET - to allow the user to view their workouts , POST - to allow the user to create a new workout, PUT - to allow the user to add new excersices to the existing workout. There is also an additional GET route that allows the user to view the specific range of their workouts. 


## 3. Link to Heroku deployment <a name="link"></a>
The project is deployed on Heroku and available for view using this link:
https://pwa-offline-budget-tracker.herokuapp.com/

## 4. Structure<a name="structure"></a>
The repo contains a set of files and folders responsible for backend functionality. Files responsible for frontend functionality are located in a public folder.

Models folder contains *workout.js* which initializes the schema. Schema represents the document properties that are saved to the database, and computed properties (through virtuals) that are just displayed on a web-page.
![Screenshot](./public/assets/media/model.png).
Routes folder contains *html.js* which sets the routes to display .html files:
![Screenshot](./public/assets/media/htmlroutes.png)
and *api.js* which is responsible for displaying and posting the data to the database. 
![Screenshot](./public/assets/media/apiroutes.png).
*Server.js* that is located in the root folder stores all the dependensies and connects to the port.
![Screenshot](./public/assets/media/server.png).


## 5. Finished product<a name="final"></a>
The final HTML page looks like this:
![Screenshot](./public/assets/media/final1.png)
![Screenshot](./public/assets/media/final2.png)
