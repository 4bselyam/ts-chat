import {UploadFile} from "../../domain/UploadFile/UploadFile";

interface CreateFileReq {
  readonly userId: string;
  readonly file: File;
}

export interface IUploadFile {
  create(req: CreateFileReq): Promise<UploadFile>;
  delete(): Promise<UploadFile>;
}
