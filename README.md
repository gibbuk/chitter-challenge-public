# Chitter Challenge

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#problem-statements">Problem Statements</a></li>
    <li><a href="#project-review-and-roadmap">Project Review and Roadmap</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

---

## About The Project

This project was the final challenge of the Digital Futures Academy programme and was undertaken between 8th and 21st August 2022.

The project was to produce a full-stack web application twitter clone. Full details of the problem statement and user requirments can be found in the <a href="#problem-statements">Problem Statements</a> section.

As the final project the purpose was to show our ability to integrate all our previous front-end and back-end learnings in order to implement a full-stack solution with N-tier architecture.

---

## Built With

### Front end

ReactJS App with the following imports:

- axios (for handling HTTP requests and responses)
- bootstrap (css styling import only)
- React Router (handling paths within the Reacy App)

Testing - Jest with:

- testing-library/react
- testing-library/user-events
- jest.fn() for mocking axios get/post responses.

### Back end (Server layer)

NodeJS server using:

- Express (provide web framework for node)
- Mongoose (provide connection between server and MongoDB)
- body-parser (parsing middleware for handling json req.body)
- dotenv (environment variable loading)
- cors (cross origin resource sharing package)

Testing - Mocha with:

- chai (assertion library)
- chai-http (extend chai assertion library with HTTP integration)

### Back end (data persistence layer)

- MongoDB

---

## Getting Started

### Installation instructions

Clone the repo.

```
cd client   //Front end - from cloned root directory
npm i
```

```
cd server //Back end - from cloned root directory
npm i
```

### Testing instructions

Test data should already exist within the mongo Atlas app.

Running the backend tests (instructions below) will clear and reinsert the Mongo Atlas database returning it to initial state.

Frontend testing data files can be found at:

```
client/src/utils/
```

Backend testing data files can be found at:

```
server/test/mockData/
```

1. Testing the server:

```
cd server               //from project root.

npm run test-win       //if testing from windows
npm run test-mac       //if testing from mac

```

2. Testing the front end:

```
cd client               //from project root.

npm test               //will run react tests.

```

### Running the app instructions

1. Run an instance of MongoDB

You will need to run an instance of MongoDB to connect to. The current `.env.test` file in `./server` assumes you are running an instance on `localhost:27017`. Rewrite `DB_URI` with your instance details as required, e.g. `mongodb://localhost:<yourPortNumber>` for a local instance or `mongodb+srv://<connection string>` if using a Mongo Atlas cloud connection.

Running the server tests in the next step will create a `test` database in your instance populated with `peeps` and `users` collections.

2. Run the server:

```
cd server               //from project root.

npm run start-win       //if running from windows
npm run start-mac       //if running from mac

//server will run on localhost:4000 and connect to MongoDB instance.
```

3. Run the front end:

```
cd client               //from project root.

npm start               //will run windows or mac react app.

//React app will run on localhost:3000

```

---

## Problem Statements

The final challenge assignment in the Digital Futures Academy programme. The project required implementing a full stack web application, showing my ability to integrate front- and back-end technologies to implement a solution that met the user requirements.

- The original user stories and requirements can be found in the file [./ChallengeNotes.md](./ChallengeNotes.md).

- Documentation related to my development process can be found at: [./DevProcessDoc.md](./DevProcessDoc.md).

It includes:

- Example User Story decomposition into more granular requirements.
- The Object Model for the Database
- Wireframe links/ React Component hierarchy.
- Identificaton of state and its location (React)
- Inverse data flow (React).

---

## Project Review and Roadmap

My key overall learnings from project:

- Take and implement slices of functionality so that you build up working slices of the full application over time. For example, I built the presentational, server and data persistence layer for displaying all peeps before moving onto other story requirements.
- The importance of understanding and defining the interfaces between the different N-tier architecture layers early within the development process. By defining mock data and data models early in the process allowed me to use TDD in a way that gave assurance that individual layers would properly integrate in the full application.

My technical learnings from the project:

- Implemented testing based on user behavior for the React app front-end, including mocking serving responses.
- Implemented React routes to control user interface behaviour based on the state of React app (e.g. logged in vs not logged in).
- Implemented server authentication, registration routes and implemented tests to provide assurance that they worked.

Improvements/additional features that could be included:

- Add in middleware such as express-validator within the server for sanitizing and validating post/put request information received. This would improve system security.
- Implement a token system, such as JSON Web Tokens, for increasing the security of the system.

---

## Acknowledgments

- The server login and registration routes were modified versions of code provided by Digital Futures Academy trainer Ed Wright.
- Advice and guidance was provided by Digital Futures Academy Trainers Ed Wright and Lucas Chagas at various points throughout the project.
