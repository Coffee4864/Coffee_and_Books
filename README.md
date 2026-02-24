# Coffee and Books

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)

## Summary
<ul>
<li><a href="#Describe">Description</a></li>
<li><a href="#Structure">Structure</a></li>
<li><a href="#Running_project">Running the project</a></li>
</ul>

## Description

<div id="Describe">
Coffee and Books is a project that organizes the user's PDF documents and arranges them into "shelves," also allowing the user to view their books and shelves on mobile and desktop devices through the React frontend web interface, which will be available on port 9000 by default on the hosted server.

</div>

## Structure

<div id="Structure">

The system is divided into two folders, frontend and backend. The frontend is developed in React with Vite, while the backend API uses pure Node.js with a MySQL database. Both servers will communicate via JSON. The React frontend will run on port 9000 by default, and the backend on port 3001.

</div>

## Running the project

<div id="Running_project">
To start the project, you need to use two terminals, one for the frontend folder and another for the backend folder. The frontend folder can be accessed using the standard React command

```
npm install
npm run dev
```

However, to run the backend API, you need to perform a few steps. First, run the same npm installation command from the frontend folder.

```
npm install
```

Then import the file <b>mariadb.sql</b> located in the backend root directory and also the file <b>Insomnia.yaml</b>, also located in the project root directory. The system also uses environment variables through a file called <b>.env.local</b>, currently only for database connection, which are listed below.

```
MARIADB_HOST = 127.0.0.1
MARIADVB_USER = root
MARIADB_PASSWORD = 123
MARIADB_DATABASE = coffeesAndBooks
MARIADB_PORT = 3306
```

After importing both files and creating the environment variables file, the backend API can be run using the command below.

```
node --env-file=.env.local
```
</div>