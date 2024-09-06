# MERN-Stack-Cart-Project
- Here is the step by step process of creating full-stack clean code in MERN

#### Step1 create express server
```javascript
mkdir backend frontend
npm init -y
```
- add type module and nodemon
```json
  "scripts": {
    "dev": "nodemon backend/server.js",
  "type": "module",
  }
```
- install express and other packages
```
npm i express dotenv mongoose
cd backend
touch server.js
mkdir config controllers models routers
```
- import express and start the server in server.js
```javascript
import express from 'express';
const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
    res.send("Sever is Ready")
})

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);

})
```
#### step2 setup mongodb and dotenv
1. [login](https://account.mongodb.com/account/login) to mongodb
1. create a new project
1. copy the MONGO_URI
1. in last setup Network Access to anywhere
In the main directory
```
touch .env
and paste the content
PORT=8000
MONGO_URI=your mongodb connection URL
```
In the directory backend>config
```
touch db.js
```
Db connection code
```javascript
import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1); // process code 1 code means exit failure, 0 means success

    }
}
```
Now, use it to main server.js
```javascript
import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Sever is Ready")
})

app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at ${PORT}`);

})
```

