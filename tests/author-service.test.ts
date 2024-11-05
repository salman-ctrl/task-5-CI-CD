// tests/unit/services/author-service.test.ts
import { getAuthors, createAuthor } from '../../../src/services/author-service';

describe('Author Service', () => {
    it('should fetch all authors', async () => {
        const authors = await getAuthors();
        expect(Array.isArray(authors)).toBe(true);
    });
});
