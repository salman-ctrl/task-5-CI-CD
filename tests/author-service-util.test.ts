// tests/unit/utils/author-service-util.test.ts
import { formatAuthorName } from '../../../src/utils/author-service-util';

describe('Author Service Util', () => {
    it('should format author name correctly', () => {
        const formattedName = formatAuthorName({ name: 'John Doe', bio: 'Author bio' });
        expect(formattedName).toBe('John Doe - Author bio');
    });
});
