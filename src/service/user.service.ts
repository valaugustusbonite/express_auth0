import { DocumentDefinition } from 'mongoose';
import UserDocument from '../interfaces/user.interface';
import UserModel from '../models/user.model';

export async function createUserService(input: DocumentDefinition<UserDocument>) {
  try {
    return await UserModel.create(input);
  } catch (error: any) {
    throw new Error(error);
  }
};