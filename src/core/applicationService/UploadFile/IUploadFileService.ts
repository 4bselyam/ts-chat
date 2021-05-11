import {UploadFile} from "../../domain/UploadFile/UploadFile";
import {UploadFileRepositoryRequest} from "../../domainServices/UploadFile/requests";

export interface IUploadFileService {
  upload(req: UploadFileRepositoryRequest): Promise<UploadFile> | void;
}
