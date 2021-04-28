import bodyParser from "body-parser";
import express, { Application } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import { UserController, DialogController, MessageController } from "./controllers";
import { updateLastSeen, checkAuth } from "./middlewares";
import { loginValidation } from "./utils/validations";

const app: Application = express();
const UserCtrl = new UserController();
const DialogCtrl = new DialogController();
const MessageCtrl = new MessageController();

app.use(bodyParser.json());
app.use(updateLastSeen);
app.use(checkAuth);
dotenv.config();

mongoose.connect("mongodb+srv://4bselyam:a08102001@cluster0.iwdpr.mongodb.net/chat?retryWrites=true&w=majority", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

app.get("/user/:id", UserCtrl.show);
app.post("/user/register", UserCtrl.create);
app.post("/user/login", loginValidation, UserCtrl.login);
app.delete("/user/:id", UserCtrl.delete);

app.get("/dialogs/:id", DialogCtrl.index);
app.post("/dialogs", DialogCtrl.create);
app.delete("/dialogs/:id", DialogCtrl.delete);

app.get("/messages", MessageCtrl.index);
app.post("/messages", MessageCtrl.create);
app.delete("/messages/:id", MessageCtrl.delete);

app.listen(process.env.PORT, () => {
	console.log(`[Server has started on http://localhost:${process.env.PORT}...]`);
});

// TODO: сделать получение сообщений через GET запрос. То есть, когда приходит сообщение от сокета, мы его посылаем на сервер, чтобы получить
// последнее сообщение с сервака, а не кидать всю инфу в сокете
