import { Request, Response } from "express";
import UserModel from "../models/user.model";

export const addUser = (req: Request, res: Response) => {
	const data: object = {
		email: req.body.email,
		fullname: req.body.fullname,
		password: req.body.password
	};

	const newUser = new UserModel(data);

	newUser.save((err: any) => {
		if (err) res.send(err);
		else res.send(newUser);
	});
};
