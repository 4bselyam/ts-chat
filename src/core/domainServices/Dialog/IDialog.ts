import {Dialog} from "../../domain/Dialog/Dialog";

interface FindDialogReq {
  readonly _id: string;
}

interface CreateDialogReq {
  readonly author: string;
  readonly partner: string;
}

interface DeleteDialogReq {
  readonly _id: string;
}

export interface IDialog {
  index(req: FindDialogReq, res: any): Promise<Dialog>;
  create(req: CreateDialogReq, res: any): Promise<Dialog>;
  delete(req: DeleteDialogReq, res: any): Promise<Dialog>;
}
