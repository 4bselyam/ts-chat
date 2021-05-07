export class User {
  constructor(
    _id: number,
    email: string,
    fullname: string,
    password: string,
    confirmed: string,
    avatar: string,
    confirm_hash?: number,
    last_seen?: Date,
    createdAt?: Date,
    updatedAt?: Date
  ) {}
}
