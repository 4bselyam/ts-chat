import {Dialog} from "../../domain/Dialog/Dialog";
import {CreateDialogRepositoryRequest, DeleteDialogRepositoryRequest, GetDialogRequest} from "../../domainServices/Dialog/requests";
import {IDialogRepository} from "../../domainServices/Dialog/IDialogRepository";
import {IDialogService} from "./IDialogService";

export class DialogService implements IDialogService {
  constructor(private readonly dialogRepository: IDialogRepository) {}

  addDialog({partner, _id}: CreateDialogRepositoryRequest): Promise<Dialog> | void {
    return this.dialogRepository.create(new CreateDialogRepositoryRequest(partner, _id));
  }

  removeDialog({id, _id}: DeleteDialogRepositoryRequest): Promise<Dialog> | void {
    return this.dialogRepository.delete(new DeleteDialogRepositoryRequest(id, _id));
  }

  getDialog({_id}: GetDialogRequest): Promise<Dialog> | void {
    return this.dialogRepository.index(new GetDialogRequest(_id));
  }
}
