import bodyParser from "body-parser";
import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { UserController } from "./controllers";

const app: Application = express();
dotenv.config();

mongoose.connect("mongodb+srv://4bselyam:a08102001@cluster0.iwdpr.mongodb.net/chat?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: true
});
app.use(bodyParser.json());

const User = new UserController();

app.get("/user/:id", User.show);
app.post("/user/register", User.create);
app.delete("/user/:id", User.delete);

app.listen(process.env.PORT, () => {
	console.log(`[Server has been started on port ${process.env.PORT}...]`);
});
