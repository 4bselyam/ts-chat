import { NextFunction, Response, Request } from "express";
import { verifyJWTToken } from "../utils";
import { IUser } from "../models/User";

export default (req: any, res: Response, next: NextFunction) => {
	if (req.path === "/user/login" || req.path === "/user/register") return next();

	const token = req.headers.token;

	verifyJWTToken(token)
		.then((user: any) => {
			req.user = user.data;
			next();
		})
		.catch((err) => {
			res.status(403).json({ message: "Invalid auth token provided" });
		});
};
