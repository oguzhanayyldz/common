import { FixStatus } from "../types/fix-status";
import { Subjects } from "./subjects";
import { ProductType } from "./types/product-type";

export interface PackageProductLinkUpdated {
    subject: Subjects.PackageProductLinkUpdated;
    data: {
        id: string;
        uuid: string;
        userId: string;
        version: number;
        price: number;
        status: FixStatus;
        deleted: boolean;
        deletionDate: Date;
        productId: string;
        product: {
            id: string;
            uuid: string;
            userId: string;
            version: number;
            type: ProductType;
            price: string;
        },
        packageProductId: string;
        packageProduct: {
            id: string;
            uuid: string;
            userId: string;
            version: number;
            type: ProductType;
            price: number;
        }
    };
}
