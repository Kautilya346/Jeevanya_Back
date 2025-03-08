import mongoose,{Schema} from 'mongoose';

const MessageSchema = new Schema(
    {
      sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      receiver: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
      message: String,
    },
    { timestamps: true }
  );
  
export const Message = mongoose.model("Message", MessageSchema);
  