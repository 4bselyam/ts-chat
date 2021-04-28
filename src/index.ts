import bodyParser from "body-parser";
import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { UserController, DialogController } from "./controllers";

const app: Application = express();
app.use(bodyParser.json());
dotenv.config();

const UserCtrl = new UserController();
const DialogCtrl = new DialogController();

mongoose.connect("mongodb+srv://4bselyam:a08102001@cluster0.iwdpr.mongodb.net/chat?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

app.get("/user/:id", UserCtrl.show);
app.post("/user/register", UserCtrl.create);
app.delete("/user/:id", UserCtrl.delete);

app.get("/dialogs/:id", DialogCtrl.index);
app.post("/dialogs", DialogCtrl.create);
app.delete("/dialogs/:id", DialogCtrl.delete);

app.listen(process.env.PORT, () => {
	console.log(`[Server has started on port ${process.env.PORT}...]`);
});
