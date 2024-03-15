'use server';
import { DbModels } from '@/database/models';
import { connectToDatabase } from '../mongoose';
import { CreateQuestionParams, GetQuestionsParams } from '@/types/server-actions';
import { revalidatePath } from 'next/cache';
import { IQuestionSchema } from '@/database/models/question.model';

export async function createQuestion(params: CreateQuestionParams) {
  try {
    await connectToDatabase();
    const { title, content, tags, author, path } = params;
    const tagDocuments = [];

    const newQuestion = await DbModels.Question.create({
      title,
      content,
      author,
    });

    for (const tag in tags) {
      const tagName = tags[tag];
      const existingTag = await DbModels.Tag.findOneAndUpdate(
        { name: { $regex: new RegExp(`^${tagName}`, 'i') } },
        { $setOnInsert: { name: tagName }, $push: { questions: newQuestion._id } },
        { upsert: true, new: true }
      );
      tagDocuments.push(existingTag._id);
    }

    await DbModels.Question.findByIdAndUpdate(newQuestion._id, {
      $push: { tags: { $each: tagDocuments } },
    });

    revalidatePath(path, 'page');
    console.log('successfully inserted a question and tags.');
  } catch (error) {}
}

export async function getQuestions(params: GetQuestionsParams) {
  try {
    await connectToDatabase();
    const questions = await DbModels.Question.find({})
      .populate({ path: 'tags', model: DbModels.Tag })
      .populate({ path: 'author', model: DbModels.User })
      .sort({ createdAt: -1 });
    return { questions };
  } catch (e) {
    return null;
  }
}
