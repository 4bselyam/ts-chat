import {Message} from "../../../../core/domain/Message/Message";
import {IMessageRepository} from "../../../../core/domainServices/Message/IMessageRepository";
import {
  CreateMessageRepositoryRequest,
  DeleteMessageRepositoryRequest,
  GetMessagesRequest,
  UpdateReadedStatusMessageRequest
} from "../../../../core/domainServices/Message/requests";
import MessageEntity from "../../entities/Message";

export class MessageRepository implements IMessageRepository {
  async updateReadedStatus({userId, dialogId}: UpdateReadedStatusMessageRequest): Promise<void> {
    return await MessageEntity.updateMany({dialog: dialogId, user: {$ne: userId}}, {$set: {readed: true}});
  }

  async create({text, dialog_id, attachments, user_id}: CreateMessageRepositoryRequest): Promise<Message> {
    const postData = {
      text: text,
      dialog: dialog_id,
      attachments: attachments,
      user: user_id
    };

    const msg = new MessageEntity(postData);
    // this.updateReadedStatus({user_id, dialog_id});
    return await msg.save();
  }

  async delete({id, _id}: DeleteMessageRepositoryRequest): Promise<Message> {
      return await MessageEntity.findById(id).remove()
  }

  async index({dialog, _id}: GetMessagesRequest): Promise<Message[]> {
      return await MessageEntity.find({dialog: dialog})
  }
}
