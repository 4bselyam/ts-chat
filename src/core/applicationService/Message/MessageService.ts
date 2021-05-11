import {Message} from "../../domain/Message/Message";
import {IMessageRepository} from "../../domainServices/Message/IMessageRepository";
import {CreateMessageRepositoryRequest, DeleteMessageRepositoryRequest, GetMessagesRequest} from "../../domainServices/Message/requests";
import {IMessageService} from "./IMessageService";

export class MessageService implements IMessageService {
  constructor(private readonly messageRepository: IMessageRepository) {}

  addMessage({text, dialog, attachments, user}: CreateMessageRepositoryRequest): Promise<Message> | void {
    return this.messageRepository.create({text, dialog, attachments, user});
  }

  deleteMessage({id, _id}: DeleteMessageRepositoryRequest): Promise<Message> | void {
    return this.messageRepository.delete(new DeleteMessageRepositoryRequest(id, _id));
  }

  getMessage({dialog, _id}: GetMessagesRequest): Promise<Message> | void {
    return this.messageRepository.index(new GetMessagesRequest(dialog, _id));
  }

  updateReadedStatus(): void {
    return this.messageRepository.updateReadedStatus();
  }
}
