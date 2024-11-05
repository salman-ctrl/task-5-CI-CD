// tests/integration/author-integration.test.ts
import request from 'supertest';
import app from '../../src/main';

describe('Author Integration Test', () => {
    it('should create a new author', async () => {
        const res = await request(app)
            .post('/api/authors')
            .send({ name: 'Jane Doe', bio: 'New author' });

        expect(res.status).toBe(201);
        expect(res.body.name).toBe('Jane Doe');
    });
});
