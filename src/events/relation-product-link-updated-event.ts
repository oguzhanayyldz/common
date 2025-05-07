import { Subjects } from "./subjects";
import { ProductType } from "./types/product-type";

export interface RelationProductLinkUpdatedEvent {
    subject: Subjects.RelationProductLinkUpdated;
    data: RelationProductLinkUpdatedEventData
}

export interface RelationProductLinkUpdatedEventData {
    list: RelationProductLinkUpdatedEvent[];
}

export interface RelationProductLinkUpdatedEventDataListItem {
    id: string;
    uuid: string;
    user: string;
    version: number;
    deleted?: boolean;
    deletionDate?: Date | null;
    product: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        type: ProductType;
    };
    relatedProduct: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        type: ProductType;
    };
    uniqueCode?: string | null;
}