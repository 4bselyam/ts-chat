import { Request, Response } from "express";
import { validationResult } from "express-validator";
import bcrypt from "bcrypt";

import { UserModel } from "../models";
import { createJWTToken } from "../utils";
import { IUser } from "../models/User";

class UserController {
	show(req: Request, res: Response) {
		const id: string = req.params.id;
		UserModel.findById(id, (err: any, user: IUser) => {
			if (err || user === null) return res.status(404).json({ message: "User not found" });
			res.json(user);
		});
	}

	getMe(req: any, res: Response) {
		const user = UserModel.findOne({ email: req.user.email }).exec();
		user.then((doc) => res.json(doc)).catch((err) => res.json({ message: err }));
	}

	create(req: Request, res: Response) {
		const postData: object = {
			email: req.body.email,
			fullname: req.body.fullname,
			password: req.body.password
		};

		const newUser = new UserModel(postData);

		newUser
			.save()
			.then((obj: object) => res.json(obj))
			.catch((reason) => res.json(reason.message));
	}

	delete(req: Request, res: Response) {
		const id: string = req.params.id;
		UserModel.findOneAndRemove({ _id: id })
			.then((user) => {
				if (user) res.json({ message: `User ${user.fullname} deleted` });
			})
			.catch(() => res.json({ message: "User not found" }));
	}

	login(req: Request, res: Response) {
		const postData = {
			email: req.body.email,
			password: req.body.password
		};

		const errors = validationResult(req);

		if (!errors.isEmpty()) return res.status(422).json({ errors: errors.array() });

		UserModel.findOne({ email: postData.email }, (err: any, user: any) => {
			if (err || user === null) return res.status(404).json({ message: "User not found" });

			if (bcrypt.compareSync(postData.password, user.password)) {
				const token = createJWTToken(postData);

				res.json({
					status: "success",
					token
				});
			} else {
				res.json({
					status: "error",
					message: "Incorrect password or email"
				});
			}
		});
	}
}

export default UserController;
