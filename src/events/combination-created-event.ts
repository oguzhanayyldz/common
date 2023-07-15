import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";
import { ProductType } from "./types/product-type";

export interface CombinationCreatedEvent {
    subject: Subjects.CombinationCreated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        barcode: string;
        sku: string;
        price: number;
        status: FixStatus;
        erpId?: string | null;
        product: {
            id: string;
            uuid: string;
            user: string;
            version: number;
            type: ProductType;
        };
        uniqueCode: string | null;
    };
}