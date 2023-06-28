import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";

export interface CombinationUpdatedEvent {
    subject: Subjects.CombinationUpdated;
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
            type: FixStatus;
        }
    };
}
