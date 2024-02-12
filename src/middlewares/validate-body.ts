import { Request, Response, NextFunction } from 'express';
import { Schema, checkSchema, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';

export const validateBody = (schema: Schema) => {
    return [
        checkSchema(schema),
        (req: Request, res: Response, next: NextFunction) => {
            const errors = validationResult(req);
    
            if (!errors.isEmpty()) {
                throw new RequestValidationError(errors.array());
            }
    
            const extraFields = Object.keys(req.body).filter((field) => !schema.hasOwnProperty(field));
            if (extraFields.length > 0) {
                return res.status(400).json({ error: 'Tanımlanmayan alanlar: ' + extraFields.join(', ') });
            }
    
            next();
        }
    ]
}