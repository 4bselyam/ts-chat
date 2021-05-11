import {Message} from "../../domain/Message/Message";

import {
  CreateMessageRepositoryRequest,
  DeleteMessageRepositoryRequest,
  GetMessagesRequest,
  UpdateReadedStatusMessageRequest
} from "./requests";

export interface IMessageRepository {
  create(req: CreateMessageRepositoryRequest): Promise<Message> | void;
  delete(req: DeleteMessageRepositoryRequest): Promise<Message> | void;
  index(req: GetMessagesRequest): Promise<Message> | void;
  updateReadedStatus({dialogId, userId}: UpdateReadedStatusMessageRequest): Promise<void>;
}
