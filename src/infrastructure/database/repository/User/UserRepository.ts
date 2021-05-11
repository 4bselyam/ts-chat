import {IUserRepository} from "../../../../core/domainServices/User/IUserRepository";
import {User} from "../../../../core/domain/User/User";
import {
  CreateUserRepositoryRequest,
  DeleteUserRepositoryRequest,
  GetMeRepositoryRequest,
  GetUsersRepositoryRequest
} from "../../../../core/domainServices/User/requests";
import UserEntity from "../../entities/User";

export class UserRepository implements IUserRepository {
  async create({email, fullname, password}: CreateUserRepositoryRequest): Promise<User> {
    const postData = {
      email: email,
      fullname: fullname,
      password: password
    };
    const user = new UserEntity(postData);
    return await user.save();
  }

  async delete({id}: DeleteUserRepositoryRequest): Promise<User> {
    return await UserEntity.findByIdAndRemove(id);
  }

  async getMe({id}: GetMeRepositoryRequest): Promise<User> {
    return await UserEntity.findById(id);
  }

  async findUsers({query}: GetUsersRepositoryRequest): Promise<User[]> {
    return await UserEntity.find().or([{fullname: new RegExp(query, "i")}, {email: new RegExp(query, "i")}]);
  }
}
