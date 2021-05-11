import cloudinary from "../../../common/utils/cloudinary";
import {UploadFile} from "../../../../core/domain/UploadFile/UploadFile";
import {IUploadFileRepository} from "../../../../core/domainServices/UploadFile/IUploadFileRepository";
import {UploadFileRepositoryRequest} from "../../../../core/domainServices/UploadFile/requests";
import UploadFileEntity from "../../entities/UploadFile";

export class UploadFileRepository implements IUploadFileRepository {
  async upload({_id, file}: UploadFileRepositoryRequest): Promise<UploadFile> {
    return await cloudinary.v2.uploader
      .upload_stream({recourse_type: "auto"}, (err: any, result: any) => {
        if (err) throw new Error(err);

        const fileData = {
          filename: result.original_filename,
          size: result.bytes,
          ext: result.format,
          url: result.url,
          user: _id
        };

        const uploadFile = new UploadFileEntity(fileData);
        return uploadFile.save();
      })
      .end(file);
  }
}
