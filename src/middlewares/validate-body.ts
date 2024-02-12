import { Request, Response, NextFunction } from 'express';
import { Schema, ValidationError, checkSchema, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/request-validation-error';


export const validateBody = (schema: Schema) => {
    // checkSchema tarafından döndürülen validasyonları bir middleware içinde çalıştır
    const validations = checkSchema(schema);

    // Tek bir middleware fonksiyonu olarak tüm işlemleri döndür
    return (req: Request, res: Response, next: NextFunction) => {
        // Öncelikle checkSchema validasyonlarını çalıştır
        Promise.all(validations.map(validation => validation.run(req))).then(() => {
            // validationResult ile hataları kontrol et
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                throw new RequestValidationError(errors.array());
            }

            // Tanımlanmayan alanları kontrol et
            const extraFields = Object.keys(req.body).filter((field) => !Object.keys(schema).includes(field));
            if (extraFields.length > 0) {
                // return res.status(400).json({ error: 'Tanımlanmayan alanlar: ' + extraFields.join(', ') });
                let validationError: any = [{ msg: `Tanımlanmayan alanlar: ${extraFields.join(', ')}` }];
                throw new RequestValidationError (validationError);
            }

            // Her şey geçerliyse, sonraki middleware'e geç
            next();
        }).catch(next); // Hata oluşursa, Express'e hata yönetimine geç
    };
};
