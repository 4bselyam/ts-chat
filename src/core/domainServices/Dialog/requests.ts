export class CreateDialogRepositoryRequest {
  constructor(public readonly partner: string, public readonly _id: string) {}
}

export class DeleteDialogRepositoryRequest {
  constructor(public readonly id: string, public readonly _id: string) {}
}

export class GetDialogRequest {
  constructor(public readonly _id: string) {}
}
