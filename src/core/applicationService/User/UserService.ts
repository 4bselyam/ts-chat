import {User} from "../../domain/User/User";
import {IUserRepository} from "../../domainServices/User/IUserRepository";
import {
  DeleteUserRepositoryRequest,
  GetMeRepositoryRequest,
  CreateUserRepositoryRequest
} from "../../domainServices/User/requests";
import {IUserService} from "./IUserService";

export class UserService implements IUserService {
  constructor(private readonly userRepository: IUserRepository) {}

  removeUser({id}: DeleteUserRepositoryRequest) {
    return this.userRepository.delete(new DeleteUserRepositoryRequest(id));
  }

  getMe({id}: GetMeRepositoryRequest): Promise<User> | void {
    return this.userRepository.getMe(new GetMeRepositoryRequest(id));
  }

  createUser({email, fullname, password}: CreateUserRepositoryRequest) {
    return this.userRepository.create({email, fullname, password});
  }

  getUsers(): Promise<User[]> | void {
    return this.userRepository.findUsers();
  }
}
