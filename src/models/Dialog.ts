import mongoose, { Schema, Document } from "mongoose";

export interface IDialog extends Document {
	partner: { type: Schema.Types.ObjectId; ref: string };
	owner: { type: Schema.Types.ObjectId; ref: string };
	messages: [{ type: Schema.Types.ObjectId; ref: string }];
}

const DialogSchema: Schema = new Schema(
	{
		partner: { type: Schema.Types.ObjectId, ref: "User" },
		author: { type: Schema.Types.ObjectId, ref: "User" },
		lastMessage: { type: Schema.Types.ObjectId, ref: "Message" }
	},
	{
		timestamps: true
	}
);

const DialogModel = mongoose.model<IDialog>("Dialog", DialogSchema);
export default DialogModel;
