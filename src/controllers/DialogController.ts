import { Request, Response } from "express";
import { DialogModel } from "../models";

class DialogController {
	index(req: Request, res: Response) {
		const authorId: string = req.params.id;

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
			.then((obj: object) => res.json(obj))
			.catch((reason) => res.json(reason.message));
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
