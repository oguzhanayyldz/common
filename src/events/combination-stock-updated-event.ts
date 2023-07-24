import { Subjects } from "./subjects";

export interface CombinationStockUpdatedEvent {
    subject: Subjects.CombinationStockUpdated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        quantity: number;
        rezervedQuantity: number;
        product: {
            id: string;
            uuid: string;
            user: string;
            version: number;
        };
    };
}
