import mongoose, { Schema, Document } from "mongoose";
import isEmail from "validator";

export interface UserInterface extends Document {
	email: string;
	fullname: string;
	password: string;
}

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

const UserModel = mongoose.model<UserInterface>("User", UserSchema);
export default UserModel;
