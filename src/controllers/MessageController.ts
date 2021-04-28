import { Request, Response } from "express";
import { MessageModel } from "../models";

class MessageController {
	index(req: Request, res: Response) {
		const dialogId = req.query.dialog;

		MessageModel.find({ dialog: dialogId })
			.populate(["dialog"])
			.exec((err, dialogs) => {
				if (err) return res.status(404).json({ message: "Dialogs not found" });
				return res.json(dialogs);
			});
	}
	create(req: Request, res: Response) {
		const userId = "608935da0bb5566d7f1688a8";
		const postData: object = {
			text: req.body.text,
			user: userId,
			dialog: req.body.dialog_id
		};

		const message = new MessageModel(postData);

		message
			.save()
			.then((obj: object) => res.json(obj))
			.catch((reason) => res.json(reason.message));
	}

	delete(req: Request, res: Response) {
		const id: string = req.params.id;
		MessageModel.findOneAndRemove({ _id: id })
			.then((message) => {
				if (message) res.json({ message: "Message was deleted" });
			})
			.catch(() => res.json({ message: "Message not found" }));
	}
}

export default MessageController;
