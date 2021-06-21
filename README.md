## Object-Relational Mapping (ORM): E-commerce Back End

<h2> Table of Contents </h2>

- [Project Link](#project-link)
- [Description](#description)
- [What did we do](#what-did-we-do)
- [Getting Started](#getting-started)
- [Walkthrough Video](#walkthrough-video)

## Project Link

Click [here](https://github.com/PDUBB3/ecommerce-back-end.git) to view project on Github repository

## Description

In this project, a back end for an e-commerce site has been built by modifying starter code. Express.js API has been used to use sequelize to interact with a MySQL database.

## What did we do?

As a manager at an internet retail company, a back end has been built for an e-commerce website that uses the latest technologies, so it can complete with other e-commerce companies. It allows the user t do the following:

- [x] Add my database name, MySQL username, and MySQL password to an environment variable file, to then connect to a database using Sequelize
- [x] Enter schema and seed commands so then a development database is created and is seeded with test data
- [x] When I enter the command to invoke the application, then my server is started and the Sequelize models are synced to the MySQL database
- [x] When I open API GET routes in Insomnia Core/Postman for categories, products, or tags, then the data for each of these routes is displayed in a formatted JSON salaries of all employees in that department
- [x] When I test API POST, PUT, and DELETE routes in Insomnia Core/Postman, then I am able to successfully create, update, and delete data in my database

## Getting started

- Create a new GitHub repository called ecommerce-back-end
- Clone github project onto your local machine
- Navigate into the project
- Open the project into VS code

```
git clone git@github.com:PDUBB3/ecommerce-back-end.git
cd readme-generator
code .
```

- Repo to include a `package.json` file by running `npm init -y` when you first set up the project.
- Add `start` script to `package.json`
- Create a `seed.sql` file to pre-populate our database
- Use `scheme.sql` filed in the `db` folder to create database with MySQL commands and use environmental variables to store sensitive data.

Installation

```
npm i
npm i nodemon -D
npm i inquirer


```

Run

```
npm run start
npm run watch
npm run dev
npm run seed

```

## Walkthrough Video

Click [here](https://drive.google.com/file/d/1Cs6CXUWhLP2KFpSGH-BvAEz1ntxidLLn/view) to view my walkthrough video Part 1 and [here](https://drive.google.com/file/d/1gKTqCOwCA9cWeid5ms2mFbHswOE4pNje/view) for part 2.
