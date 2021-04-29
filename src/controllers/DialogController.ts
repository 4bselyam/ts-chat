import { Request, Response } from "express";
import { DialogModel, MessageModel, UserModel } from "../models";

class DialogController {
	index(req: any, res: Response) {
		const user = UserModel.findOne({ email: req.user.email }).exec();

		user.then((doc) => {
			DialogModel.find({ author: doc?._id })
				.populate(["author", "partner"])
				.exec(function (err, dialogs) {
					if (err || dialogs === null) return res.status(404).json({ message: "Dialogs are empty" });
					return res.json(dialogs);
				});
		}).catch((err) => res.json({ message: err }));
	}

	create(req: Request, res: Response) {
		const postData: object = {
			author: req.body.author,
			partner: req.body.partner
		};

		const dialog = new DialogModel(postData);

		dialog
			.save()
			.then((dialogObj: any) => {
				const message = new MessageModel({
					text: req.body.text,
					user: req.body.author,
					dialog: dialogObj._id
				});

				message
					.save()
					.then(() => res.json({ dialog: dialogObj }))
					.catch((err) => res.json({ message: err }));
			})
			.catch((reason) => res.json(reason));
	}

	delete(req: Request, res: Response) {
		const id: string = req.params.id;
		DialogModel.findOneAndRemove({ _id: id })
			.then((dialog) => {
				if (dialog) res.json({ message: "Dialog was deleted" });
			})
			.catch(() => res.json({ message: "Dialog not found" }));
	}
}

export default DialogController;
