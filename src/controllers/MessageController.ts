import { Request, Response } from "express";
import socket from "socket.io";

import { MessageModel, UserModel } from "../models";

class MessageController {
	io: socket.Server;

	constructor(io: socket.Server) {
		this.io = io;
	}

	index(req: Request, res: Response) {
		const dialogId = req.query.dialog;

		MessageModel.find({ dialog: dialogId })
			.populate(["dialog"])
			.exec((err, dialogs) => {
				if (err) return res.status(404).json({ message: "Dialogs not found" });
				return res.json(dialogs);
			});
	}

	create = (req: any, res: Response) => {
		const user = UserModel.findOne({ email: req.user.email }).exec();
		user.then((doc) => {
			const postData: object = {
				text: req.body.text,
				user: doc?._id,
				dialog: req.body.dialog_id
			};

			const message = new MessageModel(postData);

			message
				.save()
				.then((obj: any) => {
					obj.populate("dialog", (err: any, message: any) => {
						if (err) return res.status(500).json({ message: err });
						res.json(message);
						this.io.emit("SERVER:NEW_MESSAGE", message);
					});
				})
				.catch((reason) => res.json(reason.message));
		}).catch((err) => {
			res.json({ message: err });
		});
	};

	delete = (req: Request, res: Response) => {
		const id: string = req.params.id;
		MessageModel.findOneAndRemove({ _id: id })
			.then((message) => {
				if (message) res.json({ message: "Message was deleted" });
			})
			.catch(() => res.json({ message: "Message not found" }));
	};
}

export default MessageController;
