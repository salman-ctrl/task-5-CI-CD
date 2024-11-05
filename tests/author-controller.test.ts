// tests/unit/controllers/author-controller.test.ts
import { getAuthors, createAuthor } from '../../../src/controllers/author-controller';
import { Request, Response } from 'express';

describe('Author Controller', () => {
    it('should retrieve all authors', async () => {
        const req = {} as Request;
        const res = {
            json: jest.fn(),
        } as unknown as Response;

        await getAuthors(req, res);
        expect(res.json).toHaveBeenCalled();
    });
});
