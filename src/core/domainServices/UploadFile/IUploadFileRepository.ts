import {UploadFile} from "../../domain/UploadFile/UploadFile";
import {UploadFileRepositoryRequest} from "./requests";

export interface IUploadFileRepository {
  upload(req: UploadFileRepositoryRequest): Promise<UploadFile> | void;
}
