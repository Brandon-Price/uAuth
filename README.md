# uAuth
This project will be creating a user authentication system focusing on the backend, with a simple login in/ sign in page for the front end.<br>

Project will use Typescript and NextJS, Postgres, Express and Nodejs for the database. <br>
    - Using Docker containers for Postgres<br>
    - Project will be split into two folders:<br>
    &nbsp; &nbsp; &nbsp; &nbsp; **Client Folder**: Typescript, Nextjs, TailwindCSS, Prisma<br>
    &nbsp; &nbsp; &nbsp; &nbsp; **Server Folder**: Nodejs, Express, Unsure of Auth Tech, Docker, Postgres<br>

### Prerequisites
__________________________________________________________
To get the project running you will need to install docker onto your computer.<br>
__________________________________________________________
### ***Warning***
<br>There are issues with postgres and the docker containers where if you have postgres downloaded onto your computer it will treat the postgres locally as the main server. Thus not allowing for
the docker containers to properly work.<br><br>
__________________________________________________________
## Getting Started

To run the project currently:
<ul>
    <li>After downloading, change the directory to each of the folders, client and server</li>
     &nbsp; &nbsp;  - In each run npm install<br>
    <br>
    <li>Make the docker image, run the commands:</li>
     &nbsp; &nbsp;   - docker compose build<br>
     &nbsp; &nbsp;   - docker compose up -d db<br>
     &nbsp; &nbsp;   - docker compose up -d server<br>
    <br>
    <li>In terminal you need to run: docker exec -it server npx prisma migrate dev --name init</li><br>
    <li>In client folder run: npm run dev</li>
</ul>

I will be adding another docker container to the frontend, and will be editing the docker commands to possibly include the backend server migrations
