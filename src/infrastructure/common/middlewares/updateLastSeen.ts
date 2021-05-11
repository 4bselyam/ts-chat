import express from "express";
import UserEntity from "../../database/entities/User";

declare module "express" {
  export interface Request {
    user?: any;
  }
}

export default (req: express.Request, __: express.Response, next: express.NextFunction) => {
  if (req.user) {
    UserEntity.findOneAndUpdate(
      {_id: req.user.id},
      {
        last_seen: new Date()
      },
      {new: true},
      () => {}
    );
  }
  next();
};
