import express from "express";
import io from "socket.io";
import bodyParser from "body-parser";
import { UserCtrl, DialogCtrl, MessageCtrl } from "../controllers";
import { updateLastSeen, checkAuth } from "../middlewares";
import { loginValidation } from "../utils/validations";

const createRoutes = (app: express.Application, io: io.Server) => {
	const UserController = new UserCtrl(io);
	const DialogController = new DialogCtrl(io);
	const MessageController = new MessageCtrl(io);

	app.use(bodyParser.json());
	app.use(updateLastSeen);
	app.use(checkAuth);

	app.get("/user/me", UserController.getMe);
	app.post("/user/register", UserController.create);
	app.post("/user/login", loginValidation, UserController.login);
	app.delete("/user/:id", UserController.delete);

	app.get("/dialogs", DialogController.index);
	app.post("/dialogs", DialogController.create);
	app.delete("/dialogs/:id", DialogController.delete);

	app.get("/messages", MessageController.index);
	app.post("/messages", MessageController.create);
	app.delete("/messages/:id", MessageController.delete);
};

export default createRoutes;
