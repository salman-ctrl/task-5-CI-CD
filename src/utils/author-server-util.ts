import { Author } from '../models/author.model';

export const formatAuthorName = (author: Author) => {
    return `${author.name} - ${author.bio}`;
};
