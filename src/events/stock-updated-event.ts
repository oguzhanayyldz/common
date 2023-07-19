import { UnitType } from "../types/unit-type";
import { Subjects } from "./subjects";

export interface StockUpdatedEvent {
    subject: Subjects.StockUpdated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        product: string;
        combination?: string | null;
        barcode: string;
        shelfBarcode: string;
        shelfAlternativeId: string;
        unitType?: UnitType;
        row: number;
        column: number;
        quantity: number;
        rezervedQuantity: number;
        uniqueCode: string | null;
        deleted: boolean;
        deletionDate: Date | null;
    };
}