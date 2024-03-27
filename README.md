1. You need to have a .env file on the root of the project with the following variables : 
```
PORT=9000
JWT_SECRET=[random key]
NODE_ENV=development
MONGO_DB_URI=[Link to your database]
```

2. Run server at root of the project : 

```
npm run server
```

3. Run front-end, on /frontend directory :

```
npm run dev
```

4. On your browser access the client : ```http://localhost:3000```
The server is running on the port 9000