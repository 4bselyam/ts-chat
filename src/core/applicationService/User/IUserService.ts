import {User} from "../../domain/User/User";
import {
  CreateUserRepositoryRequest,
  DeleteUserRepositoryRequest,
  GetMeRepositoryRequest
} from "../../domainServices/User/requests";

export interface IUserService {
  getMe(req: GetMeRepositoryRequest): Promise<User> | void;
  getUsers(): Promise<User[]> | void;
  removeUser(req: DeleteUserRepositoryRequest): Promise<User> | void;
  createUser(req: CreateUserRepositoryRequest): Promise<User> | void;
}
