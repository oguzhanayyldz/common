import { Subjects } from "./subjects";
import { ResourceName } from "../types/resourceName";
import { CurrencyCode } from "../types/currency-code";

export interface ProductPriceUpdatedEvent {
    subject: Subjects.ProductPriceUpdated;
    data: {
        requestId: string;
        userId: string;
        list: ProductPriceUpdated[];
    }
}

export interface ProductPriceUpdated {
    id: string,
    product: string,
    combination?: string,
    price: number,
    listPrice?: number,
    version: number,  // Version bilgisini de ekleyin
    source: ResourceName,
    sourceTimestamp: Date,
    updateRequestId?: string
}