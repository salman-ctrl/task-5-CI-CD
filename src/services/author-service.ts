import { AuthorModel } from '../models/author.model';

export const getAuthors = async () => {
    return await AuthorModel.find();
};

export const createAuthor = async (data: { name: string; bio: string }) => {
    const author = new AuthorModel(data);
    return await author.save();
};
