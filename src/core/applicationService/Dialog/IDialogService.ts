import {Dialog} from "../../domain/Dialog/Dialog";
import {CreateDialogRepositoryRequest, DeleteDialogRepositoryRequest, GetDialogRequest} from "../../domainServices/Dialog/requests";

export interface IDialogService {
  addDialog(req: CreateDialogRepositoryRequest): Promise<Dialog> | void;
  removeDialog(req: DeleteDialogRepositoryRequest): Promise<Dialog> | void;
  getDialog(req: GetDialogRequest): Promise<Dialog> | void;
}
