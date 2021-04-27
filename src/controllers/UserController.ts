import { Request, Response } from "express";
import { UserModel } from "../models";

class UserController {
	show(req: Request, res: Response) {
		const id: string = req.params.id;
		UserModel.findById(id, (err: any, user: any) => {
			if (err) return res.status(404).json({ message: "User not found" });
			res.json(user);
		});
	}

	getMe(req: Request, res: Response) {
		// TODO: Сделать возвращение информации про самого себя (что-то вроде аутентификации )
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
}

export default UserController;
