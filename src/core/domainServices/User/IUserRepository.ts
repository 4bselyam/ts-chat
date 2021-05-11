import {User} from "../../domain/User/User";
import {CreateUserRepositoryRequest, DeleteUserRepositoryRequest, GetMeRepositoryRequest, GetUsersRepositoryRequest} from "./requests";

export interface IUserRepository {
  create(req: CreateUserRepositoryRequest): Promise<User> | void;
  delete(req: DeleteUserRepositoryRequest): Promise<User> | void;
  findUsers(req: GetUsersRepositoryRequest): Promise<User[]> | void;
  getMe(req: GetMeRepositoryRequest): Promise<User> | void;
}
