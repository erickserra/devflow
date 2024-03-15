import { Schema, models, model, Document } from 'mongoose';
import { QuestionModelName } from './question.model';
import { UserModelName } from './user.model';

export interface ITagSchema extends Document {
  name: string;
  questions: Schema.Types.ObjectId[];
  followers: Schema.Types.ObjectId[];
  createdAt: Date;
}

const TagSchema = new Schema({
  name: { type: String, required: true, unique: true },
  questions: [{ type: Schema.Types.ObjectId, ref: QuestionModelName }],
  followers: [{ type: Schema.Types.ObjectId, ref: UserModelName }],
  createdAt: { type: Date, default: Date.now },
});

export const TagModelName = 'Tag';
export const TagCollectionName = 'tags';

export const TagModel = models.Tag || model<ITagSchema>(TagModelName, TagSchema, TagCollectionName);
