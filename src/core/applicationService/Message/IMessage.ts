import {Message} from "../../domain/Message/Message";

interface FindMsgReq {
  readonly dialogId: string;
  readonly userId: string;
}

interface DeleteMsgReq {
  readonly id: string;
  readonly userId: string;
}

interface CreateMsgReq {
  readonly text: string;
  readonly dialog: string;
  readonly attachments: string;
  readonly userId: string;
}

export interface IMessage {
  updateReadedStatus(req: any, res: any, userId: string, dialog: string): void;
  index(req: FindMsgReq, res: any): Promise<Message>;
  create(req: CreateMsgReq, res: any): Promise<Message>;
  delete(req: DeleteMsgReq, res: any): Promise<Message>;
}
