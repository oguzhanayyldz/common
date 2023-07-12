import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";
import { ProductType } from "./types/product-type";

export interface CombinationCreatedEvent {
    subject: Subjects.CombinationCreated;
    data: {
        id: string;
        uuid: string;
        userId: string;
        version: number;
        barcode: string;
        sku: string;
        price: number;
        status: FixStatus;
        erpId: string;
        deleted: boolean;
        deletionDate: Date;
        productId: string;
        product: {
            id: string;
            uuid: string;
            userId: string;
            version: number;
            type: ProductType;
        };
        uniqueCode: string | null;
    };
}