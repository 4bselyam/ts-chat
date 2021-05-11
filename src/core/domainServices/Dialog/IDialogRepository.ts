import {Dialog} from "../../domain/Dialog/Dialog";

import {
  CreateDialogRepositoryRequest,
  DeleteDialogRepositoryRequest,
  GetDialogRequest
} from "./requests";

export interface IDialogRepository {
  index(res: GetDialogRequest): Promise<Dialog> | void;
  create(res: CreateDialogRepositoryRequest): Promise<Dialog> | void;
  delete(res: DeleteDialogRepositoryRequest): Promise<Dialog> | void;
}
