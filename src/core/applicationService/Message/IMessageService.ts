import {Message} from "../../domain/Message/Message";

import {
  CreateMessageRepositoryRequest,
  DeleteMessageRepositoryRequest,
  GetMessagesRequest
} from "../../domainServices/Message/requests";

export interface IMessageService {
  addMessage(req: CreateMessageRepositoryRequest): Promise<Message> | void;
  deleteMessage(req: DeleteMessageRepositoryRequest): Promise<Message> | void;
  updateReadedStatus(): Promise<void> | void;
  getMessage(req: GetMessagesRequest): Promise<Message> | void;
}
