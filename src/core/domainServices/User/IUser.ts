import express from "express";
import {User} from "../../domain/User/User";

export interface FindUserReq {
  readonly id: string;
}

export interface AddUserReq {
  readonly fullname: string;
  readonly email: string;
  readonly password: string;
}

export interface DeleteUserReq {
  readonly _id: string;
}

export interface IUser {
  show(req: FindUserReq, res: express.Response): Promise<User>;
  getMe(req: FindUserReq, res: express.Response): Promise<User>;
  findUsers(): Promise<User[]>;
  delete(req: DeleteUserReq, res: express.Response): Promise<User>;
  create(req: AddUserReq, res: express.Response): Promise<User>;
}
