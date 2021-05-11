import {Dialog} from "../../../../core/domain/Dialog/Dialog";
import {
  CreateDialogRepositoryRequest,
  DeleteDialogRepositoryRequest,
  GetDialogRequest
} from "../../../../core/domainServices/Dialog/requests";
import DialogEntity from "../../entities/Dialog";
import {IDialogRepository} from "../../../../core/domainServices/Dialog/IDialogRepository";

export class DialogRepository implements IDialogRepository {
  async create({partner, _id}: CreateDialogRepositoryRequest): Promise<Dialog> {
    const postData = {
      author: _id,
      partner: partner
    };

    const dialog = new DialogEntity(postData);
    return await dialog.save();

    // DialogEntity.findOne({author: _id, partner: partner}, async (err, user) => {
    //   if (user) {
    //     return "Such dialog already exists";
    //   }

    //   const dialog = new DialogEntity(postData);
    //   return await dialog.save();
    // });
  }

  async delete({id, _id}: DeleteDialogRepositoryRequest): Promise<Dialog> {
    return await DialogEntity.findById(id).remove();
  }

  async index({_id}: GetDialogRequest): Promise<Dialog[]> {
    return await DialogEntity.find({_id});
  }
}
