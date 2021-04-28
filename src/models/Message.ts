import mongoose, { Schema, Document } from "mongoose";

export interface IDialog extends Document {
	partner: { type: Schema.Types.ObjectId; ref: string };
	owner: { type: Schema.Types.ObjectId; ref: string };
	lastMessage: { type: Schema.Types.ObjectId; ref: string };
}

const DialogSchema: Schema = new Schema(
	{
		partner: { type: Schema.Types.ObjectId, ref: "User", require: true },
		author: { type: Schema.Types.ObjectId, ref: "User", require: true },
		lastMessage: { type: Schema.Types.ObjectId, ref: "Message" }
	},
	{
		timestamps: true
	}
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);
export default DialogModel;
