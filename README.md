## Shipmnts Recruiting Task 3

Design and Develop a File Explorer similar to Github.
Time (3 hrs)

Approach : Develop this app using nextjs 14. Frontend and backend resides in the same directory. use server actions and api for backend code. use prisma as ORM, use zustand for global state management, use react query (tanstack) for data fetching.

### Directory Struture

- / (Root) : root of the directory
  - /public : public assets
  - /src : source directory for the code
    - /api : api routes for nextjs. all the relevant api was going to be declared here.
    - /app : app router for nextjs
    - /components : all the ui components resides in this directory.
    - /constant : global constants shared all over the app. ex: API_URL
    - /hooks : custom hooks reside in this directory. react-query hooks was going to reside in this
    - /lib : custom libraries and helper functions in this directory
    - /prisma : prisma client is declared here and was going to be used in server actions and api.
    - /providers : custom providers would be declared here. ex: QueryClientProvider, StateProvider
    - /services : service functions used by react query to fetch data.
    - /store : state management store reside here. (zustand)
    - /types : custom types.

### How to run this ?

- clone this directory : `git clone "https://github.com/dhruvwill/shipmnts.git" `
- navigate to dir : `cd shipmnts`
- install dependencies : `npm install`
- set env variables : (optional, bcz couldn't complete it), set DATABASE_URL for prisma
- Run development server : `npm run dev`

### How to deploy ?

- Build nextjs : `npm run build`
- Start prod server : `npm run start`
- do server conf.

### See deployed app

[LINK](https://ship.dhruvwill.com/)

### Author ?

- Dhruvil S Shah
