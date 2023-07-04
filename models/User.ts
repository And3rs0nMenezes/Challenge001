import { model, Schema } from 'mongoose';

const userSchema = new Schema(
  {
    email: { type: String},
    password: { type: String }
  },
  {
    timestamps: true
  }
)
export const UserModel = model("User",userSchema);