import { NextFunction, Response, Request } from "express";
import { verifyJWTToken } from "../utils";
import { IUser } from "../models/User";

export default (req: any, res: Response, next: NextFunction) => {
	if (req.path === "/user/login" || req.path === "/user/register") return next();

	const token = req.headers.token;

	verifyJWTToken(token)
		.then((user) => {
			req.user = user;
			next();
		})
		.catch(err => {
			res.status(400).json({ message: "Invalid auth token provided" });
		});
};
