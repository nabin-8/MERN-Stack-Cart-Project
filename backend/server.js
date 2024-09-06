import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import productRouter from './routers/product.route.js';
dotenv.config()
const app = express();
const PORT = process.env.PORT;

// middleware
app.use(express.json());

app.use("/api/v1/products", productRouter)


app.listen(PORT, () => {
    connectDB()
    console.log(`Server started at ${PORT}`);

})