import { UnitType } from "../types/unit-type";
import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";

export interface ProductCreatedEvent {
    subject: Subjects.ProductCreated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        barcode: string | null;
        sku: string;
        name: string;
        description: string;
        image: string;
        price: number;
        status: ProductStatus;
        type: ProductType;
        unitType: UnitType;
        erpId?: string | null;
        uniqueCode: string | null;
        creationDate?: Date;
        updatedOn?: Date;
    };
}