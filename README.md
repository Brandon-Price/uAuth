# uAuth
This project will be creating a user authentication system focusing on the backend, with a simple login in/ sign in page for the front end.<br>

Project will use Typescript and NextJS, Postgres, Express and Nodejs for the database. <br>
    - Using Docker containers for Postgres<br>
    - Project will be split into two folders:<br>
    &nbsp; &nbsp; &nbsp; &nbsp; **Client Folder**: Typescript, Nextjs, TailwindCSS, Prisma<br>
    &nbsp; &nbsp; &nbsp; &nbsp; **Server Folder**: Nodejs, Express, Unsure of Auth Tech, Docker, Postgres<br>

### Incomplete Items
__________________________________________________________

- I wanted to use a email verification code system, but they cost money and I can't justify paying for it for it just being practice.
- I could implement JWT verification, but I think that right now the main point was to show that I could set it up and do a small full stack verification process with docker.

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
     &nbsp; &nbsp;  - In each of the directories run the command: npm install<br>
    <br>
    <li>Make the docker image, run the commands:</li>
     &nbsp; &nbsp;   - docker compose build<br>
     &nbsp; &nbsp;   - docker compose up -d db<br>
     &nbsp; &nbsp;   - docker compose up -d server<br>
     &nbsp; &nbsp;   - docker compose up -d client<br>
     <br>
     <li>Now the program should be up and running: Frontend is on localhost:3000 and the backend is on localhost:4000</li>
</ul>
