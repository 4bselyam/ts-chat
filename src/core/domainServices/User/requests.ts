export class CreateUserRepositoryRequest {
  constructor(
    public readonly email: string,
    public readonly fullname: string,
    public readonly password: string
  ) {}
}

export class DeleteUserRepositoryRequest {
  constructor(public readonly id: string) {}
}

export class GetMeRepositoryRequest {
  constructor(public readonly id: string) {}
}

// export class GetUsersRepositoryRequest {
//   constructor(public readonly id: string) {}
// }
