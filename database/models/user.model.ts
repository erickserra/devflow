import { Schema, models, model, Document } from 'mongoose';
import { QuestionModelName } from './question.model';

export interface IUserSchema extends Document {
  clerkId: string;
  name: string;
  username: string;
  email: string;
  password?: string;
  bio?: string;
  picture?: string;
  location?: string;
  portfolio?: string;
  reputation?: number;
  saved: Schema.Types.ObjectId[];
  createdAt: Date;
}

const UserSchema = new Schema({
  clerkId: { type: String, required: true },
  name: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  bio: { type: String, required: false },
  picture: { type: String, required: false },
  location: { type: String, required: false },
  portfolio: { type: String, required: false },
  reputation: { type: Number, required: false },
  saved: [{ type: Schema.Types.ObjectId, ref: QuestionModelName }],
  createdAt: { type: Date, default: Date.now },
});

export const UserModelName = 'User';
export const UserCollectionName = 'users';

export const UserModel = models.User || model<IUserSchema>(UserModelName, UserSchema, UserCollectionName);
