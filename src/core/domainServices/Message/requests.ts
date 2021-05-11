export class CreateMessageRepositoryRequest {
  constructor(
    public readonly text: string,
    public readonly dialog: string,
    public readonly attachments: string,
    public readonly user: string
  ) {}
}

export class DeleteMessageRepositoryRequest {
  constructor(public readonly id: string, public readonly _id: string) {}
}

export class GetMessagesRequest {
  constructor(public readonly dialog: string, public readonly _id: string) {}
}

export class UpdateReadedStatusMessageRequest {
  constructor(
    public readonly userId: string,
    public readonly dialogId: string
  ) {}
}
