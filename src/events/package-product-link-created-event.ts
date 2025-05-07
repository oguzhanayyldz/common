import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";
import { ProductType } from "./types/product-type";

export interface PackageProductLinkCreatedEvent {
    subject: Subjects.PackageProductLinkCreated;
    data: PackageProductLinkCreatedEventData;
}

export interface PackageProductLinkCreatedEventData {
    list: PackageProductLinkCreatedEvent[];
}

export interface PackageProductLinkCreatedEventDataListItem {
    id: string;
    uuid: string;
    user: string;
    version: number;
    quantity: number;
    price: number;
    status: FixStatus;
    product: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        type: ProductType;
    };
    packageProduct: {
        id: string;
        uuid: string;
        user: string;
        version: number;
        type: ProductType;
    };
    uniqueCode?: string | null;
}