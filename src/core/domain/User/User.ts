export interface User {
  _id: number;
  email: string;
  fullname: string;
  password: string;
  confirmed: boolean;
  avatar: string;
  confirm_hash?: string;
  last_seen?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}
