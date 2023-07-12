import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";

export interface ProductUpdatedEvent {
    subject: Subjects.ProductUpdated;
    data: {
        id: string;
        uuid: string;
        userId: string;
        version: number;
        name: string;
        description: string;
        price: number;
        status: ProductStatus;
        type: ProductType;
        erpId: string;
        uniqueCode: string;
        deleted: boolean;
        deletionDate: Date;
    };
}