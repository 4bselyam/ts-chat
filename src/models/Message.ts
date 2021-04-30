import mongoose, {Schema, Document} from "mongoose";

export interface IMessage extends Document {
  text: string;
  dialog: {
    type: Schema.Types.ObjectId;
    ref: string;
    require: true;
  };
  unread: {
    type: boolean;
    defaul: boolean;
  };
}

// TODO: аттач файлов (attachments)
const MessageSchema: Schema = new Schema(
  {
    text: {type: String, require: Boolean},
    dialog: {type: Schema.Types.ObjectId, ref: "Dialog", require: true},
    user: {type: Schema.Types.ObjectId, ref: "User", require: true},
    unread: {type: Boolean, default: false}
  },
  {
    timestamps: true
  }
);

// BUG: не работает корректно поле dialog в IMessage
// const MessageModel = mongoose.model<IMessage>("Message", MessageSchema);
const MessageModel = mongoose.model("Message", MessageSchema);
export default MessageModel;
