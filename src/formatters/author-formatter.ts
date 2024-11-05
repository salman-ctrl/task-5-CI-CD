import { Author } from '../models/author.model';

export const formatAuthor = (author: Author) => ({
    id: author._id,
    name: author.name,
    bio: author.bio,
});
