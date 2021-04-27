import bodyParser from "body-parser";
import express, { Application } from "express";

import connect from "./connect";
import * as UserController from "./controllers/user.controller";

const app: Application = express();
const PORT: number = 3000 || process.env.PORT;
const db: string = "mongodb+srv://4bselyam:a08102001@cluster0.iwdpr.mongodb.net/chat?retryWrites=true&w=majority";

connect(db);
app.use(bodyParser.json());

app.post("/create", UserController.addUser);

app.listen(PORT, () => {
	console.log(`[Server has been started on port ${PORT}...]`);
});
