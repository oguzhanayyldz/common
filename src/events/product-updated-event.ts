import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";
import { UnitType } from "../types/unit-type";
import { CurrencyCode } from "../types/currency-code";

export interface ProductUpdatedEvent {
    subject: Subjects.ProductUpdated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        barcode: string | null;
        sku: string;
        name: string;
        image: string;
        description: string;
        currency: CurrencyCode;
        tax: number;
        status: ProductStatus;
        type: ProductType;
        unitType: UnitType;
        erpId?: string | null;
        uniqueCode?: string | null;
        deleted?: boolean;
        deletionDate?: Date | null;
    };
}