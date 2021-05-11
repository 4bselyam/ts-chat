import {User} from "../../domain/User/User";
import {
  CreateUserRepositoryRequest,
  DeleteUserRepositoryRequest,
  GetMeRepositoryRequest,
  GetUsersRepositoryRequest
} from "../../domainServices/User/requests";

export interface IUserService {
  getMe(req: GetMeRepositoryRequest): Promise<User> | void;
  getUsers(req: GetUsersRepositoryRequest): Promise<User[]> | void;
  removeUser(req: DeleteUserRepositoryRequest): Promise<User> | void;
  createUser(req: CreateUserRepositoryRequest): Promise<User> | void;
}
