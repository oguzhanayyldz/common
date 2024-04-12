import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";
import { ProductType } from "./types/product-type";

export interface CombinationUpdatedEvent {
    subject: Subjects.CombinationUpdated;
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
        deleted?: boolean;
        deletionDate?: Date | null;
        product: {
            id: string;
            uuid: string;
            user: string;
            version: number;
            type: ProductType;
        };
        uniqueCode?: string | null;
    };
}
