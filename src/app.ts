import express from "express";
import Mongoose from './config/mongoose'
import routes from './routes/index'
import 'dotenv/config'

const dbpassword = process.env.DB_PASSWORD as string;
const databaseName = process.env.DB_NAME as string;
const databaseUser = process.env.DB_USER as string;

const newMongoose = new Mongoose(dbpassword, databaseName, databaseUser);

const app = express();
app.use(express.json());
app.use(routes)
newMongoose.connect();

export default app;

