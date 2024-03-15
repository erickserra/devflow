'use server';

import { DbModels } from '@/database/models';
import { connectToDatabase } from '../mongoose';
import { IUserSchema } from '@/database/models/user.model';
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from '@/types/server-actions';
import { revalidatePath } from 'next/cache';

export async function getUserById(params: { userId: string }): Promise<IUserSchema | null> {
  try {
    connectToDatabase();
    const { userId } = params;
    return await DbModels.User.findOne({ clerkId: userId });
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function createUser(data: CreateUserParams): Promise<IUserSchema | null> {
  try {
    connectToDatabase();
    return await DbModels.User.create(data);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export async function updateUser(params: UpdateUserParams): Promise<void> {
  try {
    connectToDatabase();
    const { clerkId, revalidatePath: path, user } = params;

    await DbModels.User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    revalidatePath(path);
  } catch (e) {
    console.error(e);
  }
}

export async function deleteUser(params: DeleteUserParams): Promise<void> {
  try {
    connectToDatabase();
    const { clerkId } = params;

    const user = await DbModels.User.findOne({ clerkId });

    if (!user) {
      throw new Error('User not found');
    }

    // first we need to delete the user question's
    // const questionsIds = await DbModels.Question.find({ author: user._id }).distinct('_id');
    await DbModels.Question.deleteMany({ author: user._id });

    // TODO: delete user answers, comments, etc.

    // and lastly, delete the user
    const deletedUser = await DbModels.User.findByIdAndDelete(user._id);

    revalidatePath(`/profile/${clerkId}`);

    return deletedUser;
  } catch (e) {
    console.error(e);
  }
}
