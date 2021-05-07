export class Dialog {
  constructor(
    _id: string,
    author: {type: string; require: true},
    partner: {type: string; require: true},
    messages: string[],
    lastMessage: string,
    createdAt?: string,
    updatedAt?: string,
    __v?: string
  ) {}
}
