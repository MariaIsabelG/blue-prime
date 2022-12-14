# BlueVest Application

## Description

_Duration: 2 Week Sprint_

We built this application for BlueVest. They needed a way match new clients with agents, keep track of the clients and agents that they were currently working with, as well as connect with potential agents and clients. They also had a goal to create a quicker and simplified client onboarding process. We created two different onboarding processes, one for agents and one for clients. Interested agents have the ability to schedule an informational onboarding meeting without ever leaving the site. Potential clients only have to fill out a short form before being matched with agents. They also have the ability to import their current insurance information using the Canopy Connect API which drastically reduces the amount of time and energy spent to get a quote. We also built two unique dashboards, one for an admin user and another for agents. Agents are able to log in to their dashboard and see all of the clients they are working with sorted by status. They are able to update that clients status as they move them through the process and eventually remove them from their dashboard. The Admin is able to see all of the current agents, clients and new leads in their dashboard. Matching clients to leads is automatic with the use of our application. Agents also recieve an email notification when they have recieved a new lead. 

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](https://bluevest.herokuapp.com/#/)

## Screen Shot


### Prerequisites

- [Node.js](https://nodejs.org/en/)

## Installation

1. Create a database named `blue_vest`,
2. The queries in the `tables.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. create a `.env` file and include a `SECRET_SESSION_SERVER` key. This can be some random combination of numbers and letters. You will also need to aquire a Sendgrid API key by signing up at https://sendgrid.com/go/email-brand-signup-sales-1?utm_source=google&utm_medium=cpc&utm_term=sendgrid&utm_campaign=SendGrid_G_S_NAMER_Brand_Tier1&cq_plac=&cq_net=g&cq_pos=&cq_med=&cq_plt=gp&gclid=Cj0KCQjw94WZBhDtARIsAKxWG-9D4evzzP-GkKXz18k6M71HIIOtTFR3t2EAkb-dtnHv8nyElfK6m0gaAinKEALw_wcB
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. The application will open up to the home page
2. If the application is in desktop view, there will be buttons on the nav bar at the top of the page. If it is in mobile view, there will be a menu button in the top right. Clicking on the menu will give the user access to these same buttons.
3. Clicking on any of the buttons labeled "Find My Pro" will bring the user to a form where they will input their basic infomation. 
4. Clicking the "Submit Basic Infomation" button will bring the user to a confirmation page
5. Clicking the "Submit and Import Insurance" button will bring the user to a view in which they can import their current insurance information using Canopy
6. If they decide against importing their insurance, they can click the "I do not wish to use canopy" button. From here they will be redirected to the confirmation page.
7. In the confimation page, there is a button to navigate to the Learning Resources page within the site.
8. Clicking on the "Join our Team" button in the nav bar or clicking the "Join BlueVest" button at the bottom of the home page will bring a user to a page with information for financial professionals interested in partnering with BlueVest.
9. On this page there in a button that says "Schedule an Intro Meeting". Clicking this button will bring the user to calendar where you can schedule a meeting using Calendly. 
10. Clicking on the "Pro Log In" button will bring a user to the log in page. 
11. If the user has logged in with an admin log in, they will see an "Admin" button on the nav bar/in the menu
12. Clicking on the "Admin" button will bring the user to the Admin Dashboard"
13. There are three tabs within the Admin Dashboard, "Agents", "Clients" and "New Leads"
14. Each of these tabs has a Search Bar. Typing in that search bar will show clients, agents or leads with names that match
15. Selecting the "Agents" tab will show the user all of the agents who have accounts and all of their information. 
16. Each Agent card has an edit and delete button.
17. Clicking on the "Edit" button will create a pop up in which a user can edit the agents details. Clicking the "Submit" button in the edit window will save these changes
18. Clicking on the "Delete" button will show an alert that confirms whether or not you want to delete that agent. 
19. Selecting the "Clients" tab will show the user all of the clients who have submitted their information to BlueVest. 
20. Each Client card has an edit and delete button.
21. Selected the "New Leads" button will show the user all of the clients who have just submitted their information and been matched with Blue Vest agents.
22. Each New Lead card has the name of the client, the information of the agent they have been matched with and the date that the client and agent were matched. They also have a "Lead Sent" button
23. Clicking the "Lead Sent" button will remove the card.
24. If the user has logged in with an agent log in, they will see an "Dashboard" button on the nav bar/in the menu
25. Clicking on the "Dashboard" button will bring the user to the Agent Dashboard. Once in the dashboard they will see four different tabs, "Leads", "Potential", "Won" and "Lost"
26. Clicking on any of these tabs will show the clients that are marked with the corresponding status. 
27. Each Client card has a drop down to change the status. Clicking the "Update Status" button will save the new status and move that card into the corresponding tab
28. In the "Lost" tab, each card also has a delete button. Clicking delete will remove that client card from that agent's dashboard


## Built With

- HTML
- CSS
- Tailwind CSS
- JavaScript
- React
- Redux
- Redux-Sagas
- PostgreSQL
- Canopy Connect API
- Calendly API
- SendGrid API


## Authors

* **Rachel Bruce** - *Initial work* - (https://github.com/rachy229)

* **Stephon Buckhanan** - *Initial work* - (https://github.com/stephdaking)

* **Maria Isabel Gonzalez** - *Initial work* - (https://github.com/MariaIsabelG)

* **Mai Hlee Vang** - *Initial work* - (https://github.com/MileyLuna)


## Acknowledgement
Special thanks to Mitchell Muller and BlueVest for allowing us to work on this project.
Thanks Prime Digital Acadmey for the education and our friends and family for the support.
