import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";
import { ProductType } from "./types/product-type";

export interface RelationProductLinkCreatedEvent {
    subject: Subjects.RelationProductLinkCreated;
    data: {
        id: string;
        uuid: string;
        userId: string;
        version: number;
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
        relatedProductId: string;
        relatedProduct: {
            id: string;
            uuid: string;
            userId: string;
            version: number;
            type: ProductType;
        };
        uniqueCode: string;
    };
}