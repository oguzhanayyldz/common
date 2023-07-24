import { Subjects } from "./subjects";
import { ProductStatus } from "./types/product-status";
import { ProductType } from "./types/product-type";
import { UnitType } from "../types/unit-type";

export interface ProductStockUpdatedEvent {
    subject: Subjects.ProductStockUpdated;
    data: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        quantity: number;
        rezervedQuantity: number;
    };
}