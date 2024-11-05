import { Request } from 'express';

export interface CustomExpressRequest extends Request {
    userId?: string;
}
