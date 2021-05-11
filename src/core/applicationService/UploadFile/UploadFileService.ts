import {UploadFile} from "../../domain/UploadFile/UploadFile";
import {UploadFileRepositoryRequest} from "../../domainServices/UploadFile/requests";
import {IUploadFileRepository} from "../../domainServices/UploadFile/IUploadFileRepository";
import {IUploadFileService} from "./IUploadFileService";

export class UploadFileService implements IUploadFileService {
  constructor(private readonly fileRepository: IUploadFileRepository) {}

  upload({_id, file}: UploadFileRepositoryRequest) {
    return this.fileRepository.upload(new UploadFileRepositoryRequest(_id, file));
  }
}
