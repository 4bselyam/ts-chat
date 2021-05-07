export class Message {
  constructor(
    _id: string,
    text: {type: string; require: boolean},
    dialog: {type: string; require: true},
    readed: {type: boolean; default: boolean},
    user: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: string
  ) {}
}
