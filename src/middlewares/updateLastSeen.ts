import { NextFunction, Response, Request } from "express";
import { UserModel } from "../models";

export default (_: Request, __: Response, next: NextFunction) => {
	UserModel.findOneAndUpdate({ _id: "608935da0bb5566d7f1688a8" }, { last_seen: new Date() }, { new: true }, () => {});
	next();
};
