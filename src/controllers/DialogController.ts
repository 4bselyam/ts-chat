import { Request, Response } from "express";
import { DialogModel, MessageModel } from "../models";

class DialogController {
	index(req: Request, res: Response) {
		const authorId: string = "608935da0bb5566d7f1688a8";

		DialogModel.find({ author: authorId })
			.populate(["author", "partner"])
			.exec(function (err, dialogs) {
				if (err || dialogs === null) return res.status(404).json({ message: "Dialogs are empty" });
				return res.json(dialogs);
			});
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
					.catch((reason) => res.json(reason));
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
