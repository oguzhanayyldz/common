import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";

export interface ProductCreatedEvent {
    subject: Subjects.ProductCreated;
    data: {
        id: string;
        uuid: string;
        userId: string;
        version: number;
        name: string;
        description: number;
        image: string;
        price: number;
        status: ProductStatus,
        type: ProductType,
        erpId: string,
        creationDate: Date,
        updatedOn: Date,
        deleted: boolean,
        deletionDate: Date
    };
}