import mongoose, { Schema, Document } from "mongoose";
import isEmail from "validator";

export interface IUser extends Document {
	email: string;
	fullname: string;
	password: string;
	confirmed: boolean;
	confirm_hash: string;
	avatar: string;
	last_seen: Date;
}

// TODO: сделать время последнего захода
const UserSchema: Schema = new Schema(
	{
		email: {
			type: String,
			required: "Email address is required",
			validator: [isEmail, "Invalid email"],
			unique: true
		},
		avatar: String,
		fullname: {
			type: String,
			required: "Fullname is required"
		},
		password: {
			type: String,
			required: "Password is required"
		},
		confirmed: {
			type: Boolean,
			default: false
		},
		confirm_hash: String,
		last_seen: Date
	},
	{
		timestamps: true
	}
);

const UserModel = mongoose.model<IUser>("User", UserSchema);
export default UserModel;
